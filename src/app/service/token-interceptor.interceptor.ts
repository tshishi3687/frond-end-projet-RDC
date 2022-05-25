import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

// @Injectable()
// export class TokenInterceptorInterceptor implements HttpInterceptor {
//
//   constructor(private service: LoginService) {}
//
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     // verifi si un token exite dans le header
//     if (JSON.parse(String(sessionStorage.getItem(this.service.Sessionjwt) != null))){
//       const token = JSON.parse(sessionStorage.getItem(this.service.Sessionjwt));
//       const clonToken = request.clone({setHeaders : { Authorization : token}});
//       return  next.handle(clonToken);
//     }
//     else {
//       const httpOptions = {
//         headers: new HttpHeaders({
//           'Access-Control-Allow-Origin': '*'
//         })
//       };
//       // @ts-ignore
//       const notToken = request.clone({setHeaders : httpOptions});
//       return next.handle(notToken);
//     }
//   }
// }
