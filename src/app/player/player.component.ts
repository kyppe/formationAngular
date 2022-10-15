import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  addPlayerForm!:FormGroup;
  player:any={};

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addPlayerForm=this.formBuilder.group({
      Name:[""],
      lastName:[""],
      position:[""]
  })
  }
  AddPlayer()
  { 
    let playerID=JSON.parse(localStorage.getItem("playerID")||'0');
    this.player.id=playerID;
    let palyers=JSON.parse(localStorage.getItem("Players")||'[]');
    palyers.push(this.player);
    localStorage.setItem("players",JSON.stringify(palyers))
    localStorage.setItem("playerID",JSON.stringify(playerID+1))
  }
}
