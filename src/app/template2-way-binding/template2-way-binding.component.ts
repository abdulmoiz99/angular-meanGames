import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template2-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template2-way-binding.component.html',
  styleUrl: './template2-way-binding.component.css'
})

export class Template2WayBindingComponent {

  user = {
    name: "Jack",
    username: "Jack2024",
    password: "J123",
    passwordRepeat: "J123"
  }

  register(form: NgForm) {
    console.log("Register is clicked")
    console.log(form.value)

    console.log("name is", this.user.name)
    console.log("username is", this.user.username)
    console.log("password is", this.user.password)
    console.log("passwordRepeat is", this.user.passwordRepeat)


  }
}
