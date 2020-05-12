import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: user[] = [];

  constructor() { 
    //create default user info
    var admin = new user();
    admin.firstName = "Admin";
    admin.lastName = "User";
    admin.userName = "Admin";
    admin.password = "12345"

    this.userList.push(admin);

  }

  saveUser(user){

    this.userList.push(user);

  }
}
