import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProxyHttpRequest } from './proxy-http-request';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

const API_URL = 'https://talks-manager.azurewebsites.net/api';

@Injectable({
  providedIn: 'any'
})
export class BaseHttpService {

  constructor(private httpClient: HttpClient) { }

  getUrl(req: ProxyHttpRequest): string {
    return `${API_URL}${req.uri}`;
  }

  httpGet<T>(req: ProxyHttpRequest) {
    const httpCall =
      this.httpClient.get<T>(this.getUrl(req))
        .pipe(
          map(res => {
            return res;
          }),
          catchError(this.handleError)
        );

    return httpCall;
  }

  httpPost<T>(req: ProxyHttpRequest) {
    const httpCall =
      this.httpClient.post<T>(this.getUrl(req), req.parameter)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      )

    return httpCall;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  createHttpRequest(uri: string, param?: any): ProxyHttpRequest {
    const proxyRequest = new ProxyHttpRequest();
    proxyRequest.uri = uri;
    proxyRequest.parameter = param;

    return proxyRequest;
  }
}
