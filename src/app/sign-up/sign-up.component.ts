import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignUpForm = this.formBuilder.group({
      Name: ['',Validators.minLength(3)],
      LastName: [''],
      Email: ['',[Validators.email,Validators.required]],
      Password: [''],
      ConfirmPassword: ['']
    })

  }
  Sign(obj: any) {
    console.log(obj);
  }

}
