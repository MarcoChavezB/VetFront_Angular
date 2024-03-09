import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserRegistrationInterface, 
        UserInterface ,
        UserLogin, 
        statusInterface, 
        LoginResponseInterface, 
        UserUpdateInterface, 
        UserDeleteInterface, 
        UserResults,
      } 
from '../../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private urlIndex = environment.index
  private urlStore = environment.store
  private urlLogin = environment.login
  private urlShow = environment.show 
  private urlUpdate = environment.update
  private urlLogout = environment.logout
  private urlDelete = environment.delete 
  private urlAuthenticate = environment.authenticate

  constructor(
    private readonly http: HttpClient,
  ) { }

  ngOnInit(){
    this.getUsers()
    console.log(environment.index)
  }

  getUsers() : Observable<UserResults>{
    return this.http.get<UserResults>(this.urlIndex)
  }

  storeUser(user: UserRegistrationInterface): Observable<UserRegistrationInterface>{
    return this.http.post<UserRegistrationInterface>(this.urlStore, user)
  }

  loginUser(user: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(this.urlLogin, user)
  }
  

  logoutuser(): Observable<statusInterface>{
    return this.http.get<statusInterface>(this.urlLogout)
  }

  getUser(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.urlShow + id)
  }
  updateUser(user: UserUpdateInterface, userId: number): Observable<UserUpdateInterface> {
    const url = `${this.urlUpdate}/${userId}`;
    return this.http.put<UserUpdateInterface>(url, user);
  }

  deleteUser(userId: string): Observable<UserDeleteInterface> {
    const urlDelete = `${this.urlDelete}${userId}`;
    return this.http.delete<UserDeleteInterface>(urlDelete);
  }

  authenticate(): Observable<statusInterface> {
    return this.http.get<statusInterface>(this.urlAuthenticate)
  }

}
