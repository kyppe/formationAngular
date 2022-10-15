import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  matches:any={}
  players:any={}


  constructor() { }

  ngOnInit(): void {
    this.matches=JSON.parse(localStorage.getItem('matches')||('[]')); 
    this.players=JSON.parse(localStorage.getItem('players')||'[]');
  }
  delete(id:any)
  {
    let pos1,pos2;
    for(let i=0;i<this.matches.length;i++)
    {
      if(this.matches[i].id===id)
      {
        pos1=i;
      }
      
    }
    for(let i=0;i<this.players.length;i++)
    {
      if(this.players[i].id===id)
      {pos2=i;}
    }
    this.matches.splice(pos1,1);
    this.players.splice(pos2,1);
    localStorage.setItem("matches",JSON.stringify(this.matches));
    localStorage.setItem("palyers",JSON.stringify(this.players));
  }

}
