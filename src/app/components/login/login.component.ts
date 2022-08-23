import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  close: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  tryLogin() {
    this.authService.login(this.username, this.password).subscribe(result => {
      this.authService.storeToken(JSON.parse(result))
      console.log(result);
    });
  }
}
