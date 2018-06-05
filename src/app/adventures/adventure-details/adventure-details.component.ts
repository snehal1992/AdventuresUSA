import { Component, OnInit, Input } from '@angular/core';
import {Adventure} from '../adventure.model';

@Component({
  selector: 'app-adventure-details',
  templateUrl: './adventure-details.component.html',
  styleUrls: ['./adventure-details.component.css']
})
export class AdventureDetailsComponent implements OnInit {
  @Input() advDetails: Adventure ;
  constructor() { }

  ngOnInit() {
  }

}
