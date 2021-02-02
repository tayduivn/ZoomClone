import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

export type Devices = MediaDeviceInfo[];

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  
  $devicesUpdated: Observable<Promise<Devices>>;

    private deviceBroadcast = new ReplaySubject<Promise<Devices>>();

    constructor() {
        if (navigator && navigator.mediaDevices) {
            navigator.mediaDevices.ondevicechange = (_: Event) => {
                this.deviceBroadcast.next(this.getDeviceOptions());
            }
        }

        this.$devicesUpdated = this.deviceBroadcast.asObservable();
        this.deviceBroadcast.next(this.getDeviceOptions());
    }

    private async isGrantedMediaPermissions() {
        if (navigator && navigator['permissions']) {
            try {
                const result = await navigator['permissions'].query({ name: 'camera' });
                if (result) {
                    if (result.state === 'granted') {
                        return true;
                    } else {
                        const isGranted = await new Promise<boolean>(resolve => {
                            result.onchange = (_: Event) => {
                                const granted = true;//_.target. === 'granted'; // Changed this
                                if (granted) {
                                    resolve(true);
                                }
                            }
                        });

                        return isGranted;
                    }
                }
            } catch (e) {
                // This is only currently supported in Chrome.
                // https://stackoverflow.com/a/53155894/2410379
                return true;
            }
        }

        return false;
    }

    private async getDeviceOptions(): Promise<any> { // Changed this
        const isGranted = await this.isGrantedMediaPermissions();
        if (navigator && navigator.mediaDevices && isGranted) {
            let devices = await this.tryGetDevices();
            if (devices.every(d => !d.label)) {
                devices = await this.tryGetDevices();
            }
            return devices;
        }
        return undefined;
    }

    private async tryGetDevices() {
        const mediaDevices = await navigator.mediaDevices.enumerateDevices();
        const devices = ['audioinput', 'audiooutput', 'videoinput'].reduce((options, kind) => {
            return mediaDevices.filter(device => device.kind === kind); // Changed this
        }, [] as Devices);

        return devices;
    }
  
}
