import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AgeFilterPipe } from './age-filter.pipe';
import { LocFilterPipe } from './loc-filter.pipe';
import { NewFilterPipe } from './new-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllAnimalsComponent,
    NewAnimalComponent,
    AgeFilterPipe,
    LocFilterPipe,
    NewFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
