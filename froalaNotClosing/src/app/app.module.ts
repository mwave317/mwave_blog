import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { FroalaPageBuilderComponent } from './froala-page-builder/froala-page-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    SecondaryComponent,
    FroalaPageBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
