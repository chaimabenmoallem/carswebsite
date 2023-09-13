import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './pages/cars/cars.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddimageComponent } from './pages/addimage/addimage.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddimageComponent,
    SearchResultComponent,
   
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
