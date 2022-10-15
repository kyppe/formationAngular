import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input()matchInput:any;
  matches:any={};
  players:any={};
  text:String="banner"
  @Output() newItemEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches")||("[]"));
    this.players=JSON.parse(localStorage.getItem("players")||("[]"));
  }
 
   
  upadateMatch(x:any)
  { 
    this.matches=x;
  }
   
  //localStorage.setItem("matches",JSON.stringify(this.matches))


}
