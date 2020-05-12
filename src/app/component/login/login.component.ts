import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName = '';
  password = '';
  allusers =[];
  loginError = false;

  constructor(private data: DataService, private router: Router, private shared :SharedService) { 

    //get all user
    this.allusers =data.userList;

  }

  login(){
    //travel the list of users
    // compare each user credentials with values from the form
    var found = false;
    for(let i=0; i<this.allusers.length; i++){

      var user = this.allusers[i];
      if(user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password){
          alert("Logged in correctly!");
          found=true;
          this.loginError = false;

          this.shared.isUserLoggedIn=false;
          this.shared.userName = user.userName;

          //send the user to register page
          this.router.navigate(['/user/register']);
      }

    }
    if(!found){
      console.error("Login in failed please Enter the correct user name and password");
      this.loginError = true;
    }
  }
 

}
