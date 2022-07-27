import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  ages = [32, 33, 16, 40];
  constructor() { }

  ngOnInit(): void {
  }

}
