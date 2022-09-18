import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user={
    userName:"",
    email:"",
    password:""
  }

  constructor(
   private api:ApiService
  ) { }

  ngOnInit(): void {
  }

  Adduser(){
    this.api.adduser(this.user).subscribe(
      (data)=>{
        alert("success");
        console.log(data)
        window.location.reload()
      }
    )
  }
  

}
