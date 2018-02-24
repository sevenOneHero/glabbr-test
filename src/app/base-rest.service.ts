import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseRestService {

  constructor(public http: HttpService) { }

  getBodyFromFormData(form: any) {
    const body = new FormData();
    for (const k in form) {
      if (k && form[k]) {
        body.append('body[' + k + ']', form[k]);
        console.log('printing post param : ' + k + ' = ' + form[k]);
      }
    }

    return body;
  }

  public throwUnhandledErrorCode(response: Response): Observable<any> {
    throw response;
  }
}
