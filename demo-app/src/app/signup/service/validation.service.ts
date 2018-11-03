import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { Validation } from '../modal/validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validate(user: User): Validation {
    const validation: Validation = new Validation();
    if (user.username.length <  8) {
      validation.userNameRequired = true;
      validation.userNameerror = 'Minimum 8 characters required';
      validation.status = true;
    }
    if (user.email.length === 0) {
      validation.emailRequired = true;
      validation.status = true;
    }
    if (user.message.length === 0) {
      validation.messageRequired = true;
      validation.status = true;
    }
    return validation;
  }
}
