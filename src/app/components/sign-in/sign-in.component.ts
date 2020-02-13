import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  signinform=this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  
    signin(){
      const{email,password}=this.signinform.value;
      this.auth.signin(email,password);
      alert("login successful")
      this.signinform.reset();
      //this.router.navigate(['/dashboard']);
    };
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) { }
  

  ngOnInit() {
  }

}
