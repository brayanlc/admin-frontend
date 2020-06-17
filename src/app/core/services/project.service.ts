import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProject(id: string) {
    return this.http.get(`${env.API_URL}project/${id}`);
  }

  getProjects(): Observable<any> {
    return this.http.get(env.API_URL + 'projects');
  }

  createProject(project): Observable<any> {
    return this.http.post(env.API_URL + 'project', project);
  }

  updateProject(project) {
    return this.http.put(env.API_URL + 'project', project);
  }

  deleteProject(id: string) {
    return this.http.delete(`${env.API_URL}project/${id}`);
  }
}
