import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
addMatch() {
throw new Error('Method not implemented.');
}
  addMatchForm!: FormGroup;
  match:any={}

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addMatchForm=this.formBuilder.group({
      teamOne:[""],
      teamTwo:[""],
      scoreOne:[""],
      scoreTwo:[""]
    })

  }

  AddMatch()
  {
    console.log("here from math************",this.match);
    let matchID=JSON.parse(localStorage.getItem("matchID")||'0')
    let matches=JSON.parse(localStorage.getItem("matches")||'[]')
    this.match.id=matchID
    matches.push(this.match)

    localStorage.setItem("matches",JSON.stringify(matches))
    localStorage.setItem("matchID",JSON.stringify(matchID+1))
  }
}
