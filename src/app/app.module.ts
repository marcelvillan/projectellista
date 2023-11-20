import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistaContactesComponent } from './llista-contactes/llista-contactes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallsContacteComponent } from './detalls-contacte/detalls-contacte.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    LlistaContactesComponent,
    DetallsContacteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatExpansionModule, MatButtonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
