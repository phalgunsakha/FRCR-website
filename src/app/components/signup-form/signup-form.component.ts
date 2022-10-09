import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  registerUserData:any ={};


  constructor(private _auth: AuthService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/exam-panel'])

      },
      err=>console.log(err)

      
    )
  }

}
