import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor() {
    
  }
  
  ngOnInit() {

  }
}
