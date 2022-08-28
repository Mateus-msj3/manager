import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../shared/services/notification.service";
import {MessageService} from "primeng/api";
import {NotificationType} from "../../shared/models/notification-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  close: boolean = false

  errors!: string[];

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService,
              private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
  }

  storeToken(token: any) {
    const access_token = JSON.stringify(token);
    localStorage.setItem('access_token', access_token);
    console.log(access_token)
  }

  tryLogin() {
    this.authService.login(this.username, this.password).subscribe(result => {
      this.storeToken(result);
      this.router.navigate(['/dashboard']);

    }, response => {
      if (response.status === 400) {
        if (response.error.error === 'invalid_grant') {
          this.showInvalidLoginErrorMessage();
        }
      } else {
        this.showErrorMessage();
      }
    });
  }

  showInvalidLoginErrorMessage() {
    this.notificationService.sendMessage({
      title: "Erro",
      message: "Usuário e/ou senha inválidos",
      type: NotificationType.error,
      options: {closeButton: true, progressBar: true}
    });
  }

  showErrorMessage() {
    this.notificationService.sendMessage({
      message: "Ocorreu um erro, por favor entre em contato com o suporte.",
      type: NotificationType.error,
      options: {closeButton: true, progressBar: true}
    });
  }

}
