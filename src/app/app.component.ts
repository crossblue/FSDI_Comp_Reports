import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  myName = "Kenneth Judd";

  constructor(){

    console.log("Hello I'm the constructor");
  

  var name: string ="Kenneth Judd";
    var age: number = 99;
    var found: boolean = false;
    var list:string[] = [];

    this.hello("test");


  }

  hello(name){
    console.log(name);

  }

  something(){

    console.log("btn clicked!");
    this.title = "Kens World!";
  }


}
