import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email:string;
  password1:string;
  password2:string;

  signupform=this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password1:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,Validators.minLength(6)]],
    
  })
  passmatch(){
    const{email,password1,password2}=this.signupform.value;
    
    if  (password1 == password2){
      this.auth.signup(email,password1);
      alert("SignUp - successful")
    }
    
    this.signupform.reset();
    this.signup()
  };

  constructor(private auth:AuthService,private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
  }
  signup(){
    this.auth.signup(this.email,this.password1);
    this.email=this.password1='';
  }
  
}
