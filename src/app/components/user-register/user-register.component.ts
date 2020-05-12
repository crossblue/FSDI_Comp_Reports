import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { NgControlStatusGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  
model = new user();
retypePass = '';
alertVisible = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  isDataCorrect(){
    return this.model.userName && this.model.email && this.model.password && this.model.password == this.retypePass;
  }

  save(){

    this.data.saveUser(this.model)

    //clear the form
    this.model = new user(); // reinitialize the obj on memory
    this.retypePass = '';

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);
  }

}
