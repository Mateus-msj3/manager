import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "./shared/services/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  applicationName: string = 'UTIL MANAGER-WEB'

  constructor(private toastrService: ToastrService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

}
