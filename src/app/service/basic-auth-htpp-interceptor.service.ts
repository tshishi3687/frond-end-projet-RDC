// import { Injectable } from '@angular/core';
// import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class BasicAuthHtppInterceptorService implements HttpInterceptor {
//
//   constructor() { }
//
//   // tslint:disable-next-line:typedef
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//
//     if (sessionStorage.getItem('username') && sessionStorage.getItem('jwt-details')) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: sessionStorage.getItem('jwt-details') as string
//         }
//       });
//     }
//
//     return next.handle(req);
//
//   }
// }
