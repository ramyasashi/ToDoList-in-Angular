import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { environment } from '../environments/environment';
import { FirebaseService } from '../app/firebase.service';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
