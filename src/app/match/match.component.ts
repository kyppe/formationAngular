import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches:any={};
  players:any={};
  @Input() matchInput:any
  @Output()NewMatches=new EventEmitter<any>()
  text:String="banner";
  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem("matches")||("[]"));
    this.players=JSON.parse(localStorage.getItem("players")||("[]"));
  }
  delete(id:any)
  {
    let matches=JSON.parse(localStorage.getItem("matches")||(""));
    let pos1;
    for(let i=0;i<matches.length;i++)
    {
      if(matches[i].id===id)
      {
        pos1=i;
      }
      
    }
    this.matches.splice(pos1,1);

    localStorage.setItem("matches",JSON.stringify(this.matches));
    this.NewMatches.emit(matches)
  }
  

}

