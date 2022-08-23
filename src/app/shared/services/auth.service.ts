import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oAuthTokenUrl: string = environment.api.baseUrl + environment.api.tokenUrl;
  appClientId:string = environment.api.clientId;
  appClientSecret: string = environment.api.clientSecret;

  jwtHelper: JwtHelperService = new JwtHelperService();
  jwtPayload: any;

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.appClientId}:${this.appClientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    return this.http.post(this.oAuthTokenUrl, params.toString(), {headers});
  }

  loadToken() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const tokenToJson = JSON.parse(token).access_token;
      return tokenToJson;
    }
    return null;
  }

  clearToken() {
    localStorage.removeItem('access_token');
  }

  getUserAuthenticated() {
    const token = this.loadToken();
    if (token) {
      const username = this.jwtHelper.decodeToken(token).user_name;
      return username;
    }
  }

}
