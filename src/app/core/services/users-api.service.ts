import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../users/constants/constants';
import { User } from '../../users/interface/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }
}

// import { API_URL } from '../app.config';
// import { HttpClient } from '@angular/common/http';
// import { Inject, Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UsersApiService {
//   constructor(
//     private http: HttpClient,
//     @Inject(API_URL) private apiUrl: string
//   ) {}

//   getUsers() {
//     return this.http.get(this.apiUrl + '/users');
//   }
// }
