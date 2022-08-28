import {NotificationType} from "./notification-type";
import {IndividualConfig} from "ngx-toastr";

export class NotificationMessage {
  title?: string;
  message?: string;
  type?: NotificationType
  options?: Partial<IndividualConfig>;
}
