import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private service: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // verifi si un token exite dans le header
    if (JSON.parse(String(sessionStorage.getItem(this.service.Sessionjwt)))){
      const token = JSON.parse(sessionStorage.getItem(this.service.Sessionjwt));
      const clone = request.clone({setHeaders : { Authorization : token}});
      return  next.handle(clone);
    }
    return  next.handle(request);
  }
}
