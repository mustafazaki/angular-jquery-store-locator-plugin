import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfd2PZlTQNjIwB7Mzu3oAiNDzesCZaDLI'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
