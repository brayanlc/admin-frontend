import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment as env} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials):Observable<any> {
    return this.http.post(env.API_URL+'signin',credentials)
  }

  toRegister(user) :Observable<any>{
    return this.http.post(env.API_URL+'signup',user)
  }
}
