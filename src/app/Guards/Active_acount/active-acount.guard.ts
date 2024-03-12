import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../../Services/UserService/user-service.service';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class ActiveAccountGuard implements CanActivate {
  constructor(private userservice: UserServiceService, private authService: AuthServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userservice.activeAccountAuth().pipe(        
        map(() => true),
        catchError(() => {
          this.authService.resetAll()
          this.router.navigate(['/AccountActiveNotFound']);
          return of(false);          
        })
    );
  }
}
