import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-with-template-reference-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-with-template-reference-component.component.html',
  styleUrl: './template-with-template-reference-component.component.css'
})
export class TemplateWithTemplateReferenceComponentComponent implements OnInit {
  @ViewChild("registrationForm")
  registrationForm!: NgForm

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("registration form values", this.registrationForm)
      this.registrationForm.setValue({ name: "Jack2", username: "Jack2024", password: "123", passwordRepeat: "123" })
    }, 0)
  }

  // user = {
  //   name: "Jack",
  //   username: "Jack2024",
  //   password: "J123",
  //   passwordRepeat: "J123"
  // }

  register(form: NgForm) {
    console.log("Register is clicked")
    console.log(form.value)

    // console.log("name is", this.user.name)
    // console.log("username is", this.user.username)
    // console.log("password is", this.user.password)
    // console.log("passwordRepeat is", this.user.passwordRepeat)
  }
}
