import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {

  registrationFrom!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {

    // this.registrationFrom = new FormGroup({
    //   name: new FormControl("Hello"),
    //   username: new FormControl,
    //   password: new FormControl,
    //   passwordRepeat: new FormControl,

    // })

    this.registrationFrom = this._formBuilder.group({
      name: "Hello",
      username: {},
      password: {},
      passwordRepeat: {}
    });
  }

  register(form: FormGroup) {
    console.log("Register click!!");
    //  console.log(this.registrationFrom.value)
    console.log(form.value)
  }

}
