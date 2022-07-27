import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() MessageFromParent:string|null ="Hello jay";
  @Output() ChildComponentClick:EventEmitter<string>=new EventEmitter<string>();
  MessageToParent:string='Hello Parent..From Child';

  constructor() { }

  ngOnInit(): void {
  }
  // send(){
  //   return 1;
  // }
SendMessageClick(){
  this.ChildComponentClick.emit(this.MessageToParent);
}
}
