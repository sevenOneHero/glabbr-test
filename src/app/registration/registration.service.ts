import { BaseRestService } from './../base-rest.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService extends BaseRestService {


  getTCode() {
    return 'SmoothModel$TL_auth_sendCode';
  }

  getAPIHash() {
    return '798p32j5bc1e6a3m6f7k813d7280f08b';
  }

  getAPIId() {
    return 0;
  }

  register(form: any): Observable<any> {
    return this.http.post('register.php?request=TL_auth_sendCode', this.getBodyFromFormData(form)).map(
      (response: Response) => {
        console.log('returning ' + response.json());
        return response.json();
      }
    ).catch(this.throwUnhandledErrorCode);
  }
}
