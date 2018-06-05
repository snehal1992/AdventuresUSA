import { Component, OnInit, Input } from '@angular/core';
import {Adventure} from './adventure.model';


@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {
  selectedAdventure: Adventure;
  constructor() { }

  ngOnInit() {
  }

}
