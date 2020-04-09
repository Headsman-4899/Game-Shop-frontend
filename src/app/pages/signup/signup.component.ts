import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) { }

  public user = {
    email: '',
    password: '',
    password2: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user)
    this.userService.SignUp(this.user)
  }
}
