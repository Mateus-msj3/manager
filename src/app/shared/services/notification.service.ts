import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {NotificationMessage} from "../models/notification-message";
import {NotificationType} from "../models/notification-type";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject: Subject<NotificationMessage> = new Subject<NotificationMessage>();

  constructor(private toastrService: ToastrService) {
    this.subject.subscribe(message => {
      switch (message.type) {
        case NotificationType.success:
          this.toastrService.success(message.message);
          break;

        case NotificationType.error:
          this.toastrService.error(message.message, message.title, message.options);
          break;

        case NotificationType.warning:
          this.toastrService.warning(message.message);
          break;

        case NotificationType.info:
          this.toastrService.info(message.message);
          break;

      }
    });
  }

  sendMessage(message: NotificationMessage) {
    this.subject.next(message);
  }

  clearMessages() {
    // @ts-ignore
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
