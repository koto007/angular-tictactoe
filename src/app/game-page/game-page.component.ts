import { Component, Input, OnInit } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public grid: Array<Cell> = [];

  private gridSize = 9;



  constructor() {
    for (let i = 0; i < this.gridSize; i++) {
      this.grid.push({
        empty: false,
        cross: false,
        circle: true
      });
    }
  }

  ngOnInit(): void {
  }

  public addCross(){
    // add a
  }
  public addCircle(){
    
  }

}
