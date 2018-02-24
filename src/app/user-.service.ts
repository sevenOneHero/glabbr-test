import { Injectable } from '@angular/core';

// This service is used to manage user session
@Injectable()
export class UserService {

  constructor() { }

  // call this method to save the user object on its login
  saveUser(user: any) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  // get the user
  getUser(): any {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  // delete the user instance when logging out
  deleteUser() {
    window.localStorage.removeItem('user');
  }

  // check if the user instance exists
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
