import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements  OnChanges {
  @Input() ranking: number = 0;
  starWidth:number; 
  constructor() { }
  ngOnChanges():void{
    this.starWidth = this.ranking * 74 / 5;
  }
 
}
