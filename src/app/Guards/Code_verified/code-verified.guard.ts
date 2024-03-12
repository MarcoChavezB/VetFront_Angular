import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../../Services/UserService/user-service.service';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeVerifyGuard implements CanActivate {
  constructor(private authService: UserServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.codeVerifiedAuth().pipe(        
        map(() => true),
        catchError(() => {
          this.router.navigate(['/login']);
          alert('Necesitas el codigo de verificación')
          return of(false);
        })
    );
  }
}
