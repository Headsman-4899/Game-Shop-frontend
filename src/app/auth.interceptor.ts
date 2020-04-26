import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token')
    if(token) {
        console.log('token exists')
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'JWT ' + token )
          })
        return next.handle(authReq)
    }
    console.log('no token')
    return next.handle(req)
  }
}