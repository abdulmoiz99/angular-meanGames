import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {

  registrationFrom!: FormGroup;

  ngOnInit(): void {
    this.registrationFrom = new FormGroup({
      name: new FormControl,
      username: new FormControl,
      password: new FormControl,
      passwordRepeat: new FormControl,

    })
  }

  register(form: FormGroup) {
    console.log("Register click!!");
    //  console.log(this.registrationFrom.value)
    console.log(form.value)
  }

}
