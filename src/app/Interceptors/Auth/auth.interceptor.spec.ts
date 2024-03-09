import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let authService: AuthServiceService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AuthInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
      ],
    });

    authService = TestBed.inject(AuthServiceService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });

});
