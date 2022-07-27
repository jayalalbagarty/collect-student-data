import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Student:any={
    SName:'Jayalal',
    Branch:'MCA',
    Rollno:10,
    Mobile:8018166228
  }
}
