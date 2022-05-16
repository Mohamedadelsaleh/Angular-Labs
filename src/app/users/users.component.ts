import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../Services/user-data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserDataServiceService) {}
  usersList:any;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.usersList = users;
    })
  }

}
