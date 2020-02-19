import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm, Validators, FormBuilder, EmailValidator } from "@angular/forms";
import { Router } from '@angular/router';
import { count } from 'rxjs/operators';

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
    
    if(password1 == password2){
      this.auth.signup(email,password1);
    }
    else if(password1!==password2)
    {
      if(password1<=7)
      {
          alert("Enter 8 Digit Password");
      }
      else if(password2<=7){
        alert("Enter 8 Digit Password");
      }
      else{
        alert("Please Enter Same Password");
      this.signup()
      }
      
    }
    /*else if(email!=EmailValidator)
    {
        alert("Enter Valid Email ID");
        this.signup()
    }*/
    else
    {
    this.signupform.reset();
    alert("Please enter valid details");
    this.signup()
    }

  };

  constructor(private auth:AuthService,private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
  }
  signup(){
    this.auth.signup(this.email,this.password1);
    this.email=this.password1='';
    alert("Signup successfully");
  }
  
}
