import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {ToastyService} from "ng2-toasty";

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
              private toastyService: ToastyService,
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
      this.toastyService.success("Sucesso!")
      this.storeToken(result);
      this.router.navigate(['/dashboard']);

    }, response => {
      if (response.status === 400) {
        if (response.error.error === 'invalid_grant') {
          this.errors = ['Usuário e/ou senha inválidos'];
        }
      } else {
        this.errors = ['Erro inesperado, contate ao suporte!'];
      }
    });
  }
}
