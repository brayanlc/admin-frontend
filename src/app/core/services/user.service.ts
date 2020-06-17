import {Injectable} from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(env.API_URL + 'users');
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${env.API_URL}user/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(env.API_URL + 'user', data);
  }

  updateUser(data: any): Observable<any> {
    return this.http.put(env.API_URL + 'user', data);
  }

  deleteUser(id: string) {
    return this.http.delete(`${env.API_URL}user/${id}`);
  }
}
