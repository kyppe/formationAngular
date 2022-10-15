import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carassouel',
  templateUrl: './carassouel.component.html',
  styleUrls: ['./carassouel.component.css']
})
export class CarassouelComponent implements OnInit {
  @Input()title!:String;

  constructor() { }

  ngOnInit(): void {
  }

}
