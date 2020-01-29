import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgloaderrorDirective } from './imgloaderror.directive';
import { ScrolltoidDirective } from './scrolltoid.directive';
import { SecondTaskComponent } from './Tasks/second-task/second-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgloaderrorDirective,
    ScrolltoidDirective,
    SecondTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
