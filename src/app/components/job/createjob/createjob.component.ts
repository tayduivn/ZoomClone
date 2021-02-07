import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
declare var $: any;


@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {

  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  createBasicNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        { nzPlacement: 'topLeft' }
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }

}
