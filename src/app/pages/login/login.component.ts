import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user)
    this.userService.SignIn(this.user)
  }
}
