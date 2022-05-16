import { Component, OnInit } from '@angular/core';
import { User } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel:User= new User("","","","","","");
  ngOnInit(): void {
  }

}
