import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ArticleService } from './article.service';


export const firebaseConfig = {
  apiKey: "AIzaSyBJBJcBOnkb1RqC-03BUB_kIA2L50re-mE",
  authDomain: "angularreg1-a3d66.firebaseapp.com",
  databaseURL: "https://angularreg1-a3d66.firebaseio.com",
  projectId: "angularreg1-a3d66",
  storageBucket: "angularreg1-a3d66.appspot.com",
  messagingSenderId: "774253038352"
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [ ArticleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
