import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-user-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  useritems : user[] = [];

 onAddPost(){


 }
  

  constructor(private data: DataService) { 

    console.log(data.userList);
    this.useritems = data.userList;
  }

  ngOnInit(): void {
    
  }

}
