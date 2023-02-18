import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 public inValidate = false

  model: User = new User("", "", "", "");
  constructor() {
  }

  handleValidate() {
    this.inValidate = true
  }
  onSubmit(): void {
    console.log(this.model);
  }
}

export class User {
  constructor(
      public email: string,
      public firstname: string,
      public lastname: string,
      public password: string
  ) {}
}
