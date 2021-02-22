import { connect, ConnectOptions, LocalTrack, Room } from 'twilio-video';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject , Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from '../services/user/token.service';

interface AuthToken {
    token: string;
}

export interface NamedRoom {
    id: string;
    name: string;
    username: string;
    maxParticipants?: number;
    participantCount: number;
}

export type Rooms = NamedRoom[];

@Injectable({
  providedIn: 'root'
})
export class VideochatService {

  $roomsUpdated: Observable<boolean>;

  private roomBroadcast = new ReplaySubject<boolean>();
  public startCountDown: Subject<boolean> = new Subject();

  constructor(private readonly http: HttpClient,private tokenService: TokenService) {
      this.$roomsUpdated = this.roomBroadcast.asObservable();
  }

  private async getAuthToken() {
      const auth =
          await this.http
                    .get<AuthToken>(`${environment.apiUrl}Video/GetToken`)
                    .toPromise();

      return auth.token;
  }

  getAllRooms() {
      return this.http
                 .get<Rooms>(`${environment.apiUrl}Video/GetRooms`)
                 .toPromise();
  }

  async joinOrCreateRoom(name: string, tracks: LocalTrack[]) {
      let room;
      try {
          const token = await this.getAuthToken();
          room =
              await connect(
                  token, {
                      name,
                      tracks,
                      dominantSpeaker: true
                  } as ConnectOptions);
      } catch (error) {
          console.error(`Unable to connect to Room: ${error.message}`);
      } finally {
          if (room) {
              this.roomBroadcast.next(true);
          }
      }

      return room;
  }

  nudge() {
      this.roomBroadcast.next(true);
  }

}
