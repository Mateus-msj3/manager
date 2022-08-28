import { Injectable } from '@angular/core';
import {Message, MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {

  }

  showSuccess(message: Message) {
    this.messageService.add(message);
  }

  showError(message: Message) {
    this.messageService.add(message);
  }

  showWarn(message: Message) {
    this.messageService.add(message);
  }

  showInfo(message: Message) {
    this.messageService.add(message);
  }

}
