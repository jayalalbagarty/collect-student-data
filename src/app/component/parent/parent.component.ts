import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  MessageToChild:string|null="Waiting for msg....";
  MessageFromChild:string='';

  constructor() { }

  ngOnInit(): void {
  }
   SendButton(){
     this.MessageToChild="Hello Child..";
   }
 GetMessageFromChild(e:string){
  this.MessageFromChild=e;
 }
}
