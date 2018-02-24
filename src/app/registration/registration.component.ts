import { BaseComponent } from './../base/base.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent extends BaseComponent implements OnInit, OnDestroy {

  mFormRegister: any;
  mErrorMessage = '';
  mSuccessMessage = '';
  constructor(private formBuilder: FormBuilder,
    private registerService: RegistrationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.mFormRegister = this.formBuilder.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        't': [ this.registerService.getTCode(), [Validators.required]],
        'api_hash': [this.registerService.getAPIHash(), [Validators.required]],
        'api_id': [this.registerService.getAPIId(), Validators.required],
      }
    );
  }

  doRegistration() {
    this.mErrorMessage = '';
    this.mSuccessMessage = '';
    this.registerService.register(this.mFormRegister.value).
      subscribe(
        (data) => {
          this.mSuccessMessage = 'Successfully sent the verification code. :) to your email address';
        },
        error => {
          this.mErrorMessage = error;
        }
      );
  }

  ngOnDestroy() {
  }

}
