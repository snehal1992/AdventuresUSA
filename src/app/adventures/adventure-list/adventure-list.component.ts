import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Adventure} from '../adventure.model';

@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.css']
})
export class AdventureListComponent implements OnInit {

  @Output() adventureSelected = new EventEmitter<Adventure>();
  adventure: Adventure [] = [
    new Adventure('Millenium Park', 'Chicago', 'http://www.virtourist.com/america/usa/chicago/imatges/10.jpg'),
    new Adventure('Central Park', 'New York City', 'https://wearetop10.com/wp-content/uploads/2016/01/NewYork-Famous-Places.jpg'),
    new Adventure('Navy Pier', 'Chicago', 'https://localwiki.org/chicago/local%20history%20navy%20pier/_files/Navy%20Pier.jpg'),
    new Adventure('Grand Canyon ', 'Arizona', 'https://images1.phoenixnewtimes.com/imager/u/original/10023009/shutterstock_100637707.jpg'),
    new Adventure('Yosemite', 'California', 'https://s.hdnux.com/photos/70/73/62/14924975/13/1024x1024.jpg'),
    new Adventure('Statue of Liberty', 'New York City', 'https://images.musement.com/cover/0002/09/thumb_108917_cover_header.jpeg?w=600&h=315&crop=edges'),
    new Adventure('DisneyLand', 'California', 'http://www.tabletmag.com/wp-content/files_mf/disneylandcur.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onSelectAdventure(adventure: Adventure) {
    this.adventureSelected.emit(adventure);
  }
}
