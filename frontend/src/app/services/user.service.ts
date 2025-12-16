import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

const USER_API = `${environment.apiUrl}/user/`;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http.post(USER_API + 'create', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_API + 'all');
  }
}
