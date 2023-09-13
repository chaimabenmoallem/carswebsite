import { Component } from '@angular/core';
import { cars } from './cars';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent {
  cars: cars[] = [];
  baseUrl: string = 'http://localhost:8080';

  constructor(private searchService: SearchService) { }
  
  ngOnInit(): void {
    this.searchService.getAllCars().subscribe({      
      next: (data) => {
        this.cars = data.map((car: any) => {
            console.log(car.imageUrl);  // <--- Add this line here to log the imageUrl
            car.imageUrl = encodeURI(car.imageUrl);
            return car;
        });
    },
      error:(error) => {
          console.error("Error fetching cars:", error);
      }
    }
    );
  }
  
}
