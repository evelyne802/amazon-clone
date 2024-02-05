import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//   @NgModule({
//   imports: [ HttpClientModule ],
// })

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
