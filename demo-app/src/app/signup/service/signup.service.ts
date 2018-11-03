import { Injectable } from '@angular/core';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public userList: Array<User> = new Array<User>();

  constructor() { }

  addUser(user: User) {
    const userToAdd = new User();
    userToAdd.username = user.username;
    userToAdd.email = user.email;
    userToAdd.message = user.message;
    this.userList.push(userToAdd);
  }

  getUsers(): Array<User> {
    return this.userList;
  }
}
