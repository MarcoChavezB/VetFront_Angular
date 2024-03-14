import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../../Services/UserService/user-service.service';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private userservice: UserServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.userservice.adminAuth().pipe(        
        map(() => true),
        catchError(() => {
          this.router.navigate(['/Notpermission']);
          return of(false);
        })
    );
  }
}
