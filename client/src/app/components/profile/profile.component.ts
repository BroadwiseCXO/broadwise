import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: String;
  profile: any;
  location: String;
mobile: String;
dateOfBirth: String;
occupation: String;

  constructor(private authSerivce:AuthService,private router:Router) { }

  ngOnInit() {

    this.email = localStorage.getItem("LoggedInUserEmail");
    this.authSerivce.getProfile(this.email.toString()).subscribe((data: any[]) =>{
    this.profile = data[0];

    this.location = this.profile.location;
    this.mobile =  this.profile.location;
    this.dateOfBirth =  this.profile.location;
    this.occupation =  this.profile.location;
    
  })
}

navigateToEditProfile(){
  console.log("updated details");
  console.log(this.location);
  console.log(this.mobile);
  console.log(this.dateOfBirth);
  console.log(this.occupation);
}

navigateToEditPhoto(){
  console.log("Router needs to be assigned and built");
 
}
}