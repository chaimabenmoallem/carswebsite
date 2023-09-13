import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';

import { CommonModule } from '@angular/common';
import { AddimageComponent } from './pages/addimage/addimage.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
const routes: Routes = [
  { path:'' , redirectTo:'cars' , pathMatch:'full'},
  { path: 'cars', component:CarsComponent},
  { path: 'all-cars', component: AddimageComponent },
  { path: 'searchResult', component: SearchResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
