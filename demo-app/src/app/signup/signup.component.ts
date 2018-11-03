import { Component, OnInit } from '@angular/core';
import { User } from './modal/user';
import { SignupService } from './service/signup.service';
import { ValidationService } from './service/validation.service';
import { Validation } from './modal/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  validate: Validation = new Validation();

  public view: string;

  public signupUser: User;

  public userList: Array<User>;

  namerequired = false;
  emailrequired = false;
  messagerequired = false;

  constructor(private signupService: SignupService, private validationService: ValidationService) { }

  ngOnInit() {
    this.userList = this.signupService.getUsers();
  }

  onSignUpLinkClick() {
    this.signupUser = new User();
    this.view = 'signup';
  }

  onRegisterUserClick() {
    this.view = 'register';
  }

  onSignUpBtnClcik() {
    this.validate = new Validation();
    this.validate = this.validationService.validate(this.signupUser);
    if (!this.validate.status) {
      this.signupService.addUser(this.signupUser);
      console.log('user added');
    } else {
      console.log('data required');
    }

  }

}
