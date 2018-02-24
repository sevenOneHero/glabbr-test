import { UserService } from './user-.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Request,
  Headers,
  XHRBackend
} from '@angular/http';
import { AngularReduxRequestOptions } from './angular-redux-request-options';
import { environment } from '../environments/environment.prod';

@Injectable()
export class HttpService extends Http {

  // To toggle between different domain endpoints for production and for development
  DOMAIN = environment.production ? 'https://mazak.glabbr.com/api/v1/r/' : 'https://mazak.glabbr.com/api/v1/r/';

  constructor(
    backend: XHRBackend,
    public userService: UserService
  ) {
    super(backend, new AngularReduxRequestOptions());
  }

  // To pass common api request params input which are to be sent
  // by every api
  public getRequestOptions(body?: any): RequestOptions {
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers, body: body });
    return options;
  }

  public appendBodyParams(body) {
    body.append('bytes', '0');
    body.append('msg_id', '6.4278093278944e+18');
    body.append('seqno', '0');
    return body;
  }


  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.showLoader();
    return super.delete(this.getFullUrl(url), this.getRequestOptions()).catch(this.onCatch)
      .do(
        (res: Response) => {
          this.checkForErrors(res);
        }, (error: any) => {
          this.onError(error);
        }
      ).finally(
        () => {
          this.onEnd();
        }
      );
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {

    this.showLoader();

    return super.get(this.getFullUrl(url), this.getRequestOptions())
      .catch(this.onCatch)
      .do((res: Response) => {
        this.checkForErrors(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });

  }

  post(url: string, body: any, options?: RequestOptions): Observable<any> {
    this.showLoader();
    return super.post(this.getFullUrl(url), this.appendBodyParams(body), this.getRequestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.checkForErrors(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onEnd();
      });

  }

  public checkForErrors(response: Response) {
    if (response.json().code) {
      switch (response.json().code) {
        case 401:
          this.userService.deleteUser();
          throw 'UNAUTHORISED ACCESS' + ' ' + response.json();
        case 500:
          throw '500 INTERNAL SERVER ERROR';
        case 1000:
          throw '500 INTERNAL SERVER ERROR';
        default:
          console.log(response.json());
          throw response.json();
      }
    }
  }






  private getFullUrl(url: string): string {
    return this.DOMAIN + url;
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    if (error.status === 0) {
      return Observable.throw('Check Network');
    } else {
      return Observable.throw(error);
    }
  }

  private onSuccess(res: Response): void {
  }

  private onError(res: Response): void {

  }

  private onEnd(): void {
    this.hideLoader();
  }

  // Call this method to show some common loader in the interface
  private showLoader(): void {

  }

  // Call this method to hide the common loader
  private hideLoader(): void {
  }
}
