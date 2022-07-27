import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagebinding',
  templateUrl: './imagebinding.component.html',
  styleUrls: ['./imagebinding.component.css']
})
export class ImagebindingComponent implements OnInit {
  imageSrc='assets/0001.jpg';
  student:any={
    FName:'Jayalal',
    Lname:'Bagarty',
    Email:'Jayalal@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
