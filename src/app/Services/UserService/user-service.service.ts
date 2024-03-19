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
        userinterfacelog
      }
from '../../Models/user';
import { CodeInterface } from '../../Models/Code';
import {PetResults} from "../../Models/Pet";
import { totalInterface } from '../../Models/Total';
import { logsresponse } from '../../Models/Logs';

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
  private urlPetsByUser = environment.getPetsByUser

  private urlcodeVerifiedAuth = environment.codeVerifiedAuth
  private urlemailVerifiedAuth = environment.emailVerifiedAuth 
  private urlactiveAccountAuth = environment.activeAccountAuth 
  private urladminAuth = environment.adminAuth
  private urluserAuth = environment.userAuth 
  private urlguestAuth = environment.guestAuth   
  private logsindex = environment.logsindex 
  private logsindexmethod = environment.logsmethod 
  private loguser = environment.loguser 


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

  verifyCode(userId: string, codigo: string): Observable<CodeInterface> {
    return this.http.post<CodeInterface>(environment.codeVerify, {userId, codigo})
  }

  sendEmailCode(userId: string): Observable<any> {
    return this.http.post<any>(environment.sendEmailCode + userId, {})
  }

  getPetsByUser(userId: number): Observable<PetResults> {
    return this.http.get<PetResults>(this.urlPetsByUser + userId)
  }

  checkCodeAuth(userId: string): Observable<any> {
    return this.http.get<any>(environment.checkCodeAuth + userId)
  }

  codeVerifiedAuth(): Observable<any> {
    return this.http.get<any>(this.urlcodeVerifiedAuth)
  }

  emailVerifiedAuth(): Observable<any> {
    return this.http.get<any>(this.urlemailVerifiedAuth)
  }

  activeAccountAuth(): Observable<any> {
    return this.http.get<any>(this.urlactiveAccountAuth)
  }

  adminAuth(): Observable<any> {
    return this.http.get<any>(this.urladminAuth)
  }

  userAuth(): Observable<any> {
    return this.http.get<any>(this.urluserAuth)
  }

  getuserid(id: number): Observable<userinterfacelog>{
    return this.http.get<userinterfacelog>(this.loguser + id)
  }

  guestAuth(): Observable<any> {
    return this.http.get<any>(this.urlguestAuth)
  }

  desactivateAccount(userId: number): Observable<any>{
    return this.http.post<any>(environment.desactivateUser + userId, {})
  }

  getTotalUsers(): Observable<totalInterface>{
    return this.http.get<totalInterface>(environment.totalUsuarios)
  }

  getlogs(): Observable<logsresponse>{
    return this.http.get<logsresponse>(this.logsindex)
  }

  getlogsmethod(num: number): Observable<logsresponse>{
    return this.http.get<logsresponse>(this.logsindexmethod + num)
  }

}
