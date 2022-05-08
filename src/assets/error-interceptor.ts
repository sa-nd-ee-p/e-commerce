import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    private catchErrors() {
        return (response: HttpErrorResponse) => {
            switch (response.status) {
                case 401:
                    this.router.navigate(['/login']);
                    break;
                case 402:
                    this.router.navigate(['/login']);
                    break;
                case 404:
                    this.router.navigate(['/login']);
                    break;
                default:
                    this.toastError('Some error occured!')
                    break;
            }
            return throwError(response)
        }
    }
    toastError(message: string) {
        window.alert(message);
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(this.catchErrors())
            )
    }
}