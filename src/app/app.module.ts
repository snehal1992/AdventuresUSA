import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { AdventureListComponent } from './adventures/adventure-list/adventure-list.component';
import { AdventureItemComponent } from './adventures/adventure-list/adventure-item/adventure-item.component';
import { AdventureDetailsComponent } from './adventures/adventure-details/adventure-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdventuresComponent,
    AdventureListComponent,
    AdventureItemComponent,
    AdventureDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
