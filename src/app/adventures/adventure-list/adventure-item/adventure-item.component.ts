import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Adventure} from '../../adventure.model';

@Component({
  selector: 'app-adventure-item',
  templateUrl: './adventure-item.component.html',
  styleUrls: ['./adventure-item.component.css']
})
export class AdventureItemComponent implements OnInit {
  @Input() adv: Adventure ;
  @Output() adventureClick = new EventEmitter<void>();

  constructor() { }

  onEmitEvent() {
    this.adventureClick.emit();
  }

  ngOnInit() {
  }

}
