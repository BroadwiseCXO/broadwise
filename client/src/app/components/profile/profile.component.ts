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

  constructor(private authSerivce:AuthService,private router:Router) { }

  ngOnInit() {

    this.email = localStorage.getItem("LoggedInUserEmail");
    this.authSerivce.getProfile(this.email.toString()).subscribe((data: any[]) =>{
    this.profile = data[0];
    
  })
}

navigateToEditProfile(){}
}