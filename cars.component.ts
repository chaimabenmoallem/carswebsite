import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { cars } from '../addimage/cars';
import { SharedDataService } from 'src/app/services/shared-data.service'
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']

})
export class CarsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private searchService: SearchService,
    private router: Router,
    private sharedDataService: SharedDataService) { }

  ngOnInit(): void { }
  //search bar
  isActive = false;
  //elasticsearch 
  data: any[] = [];
  isDataLoaded: boolean = false;

  searchTerm: string = '';

  suggestions: any[] = [];


  allCars: any[] = [];
  showAllCars: boolean = false;
  cars: cars[] = [];

  ViewAllCars() {
    this.router.navigate(['/all-cars']);
  }


  carImageUrl: string | null = null;
  baseUrl: string = 'http://localhost:8080';

  // Called when the search button is clicked
  searchCar() {
    const terms = this.searchTerm.split(' ');
    this.performLayeredSearch(terms);
  }
  
  performLayeredSearch(terms: string[]) {
    if (!terms.length) {
      console.error("All search terms exhausted. Car not found.");
      return;
    }
  
    this.searchService.searchCarByPriority(terms).subscribe({
      next: (data: cars[]) => {
        if (data && data.length > 0) {
          this.carImageUrl = this.baseUrl + data[0].imageUrl;
          this.sharedDataService.changeImageUrl(this.carImageUrl);
          console.log("API Response:", data);
          this.sharedDataService.changeCarDetails(data);
          this.router.navigate(['/searchResult']);
        } else {
          // No match found, strip the last term and search again
          terms.pop();
          this.performLayeredSearch(terms);
        }
      },
      error: (error) => {
        if (error.status === 404) {
          // Handle the 404 error. Maybe strip a term and search again.
          terms.pop();
          this.performLayeredSearch(terms);
        } else {
          console.error("Error fetching car details:", error);
        }
      }
    });
  }
  







  toggleSearch() {
    this.isActive = !this.isActive;
  }

  onSearchChange(term: string) {
    if (term && term.length > 0) {
        this.searchService.getCombinedAutoSuggestions(term).subscribe(data => {
            this.suggestions = data;
        });
    } else {
        this.suggestions = [];
    }
}

selectedMake: string | null = null;
selectedModel: string | null = null;
selectedEnergy: string | null = null;

selectSuggestion(suggestion: any) {
  if (suggestion.type === 'make') {
      this.selectedMake = suggestion.text;
  } else if (suggestion.type === 'model') {
      this.selectedModel = suggestion.text;
  } else if (suggestion.type === 'energy') {
      this.selectedEnergy = suggestion.text;
  }

  this.searchTerm = suggestion
  this.suggestions = []; 
}

 

  // onSearch(term: string) {
  //   if (term && term.length > 0) {
  //     this.searchService.sendTerm(term).subscribe((data) => {
  //       this.suggestions = data;
  //     });
  //   } else {
  //     this.suggestions = [];
  //   }
  // }
  // this.searchService.sendSearchTerm(term).subscribe(() => {
  //     console.log('Term sent!');
  // });
}

//   onSubmitSearch() {

//     console.log('Search term value:', this.searchTerm);
//     this.http.get(`http://localhost:8080/tuning/search?tuning=${this.searchTerm}`).subscribe({


//       next: (response) => {
//         console.log("Response from backend:", response);
//     },
//     error: (error) => {
//       console.error("Error from backend:", error);
//         if (error.status === 404) {  // Term not found
//           this.addTermToTableDisplay();
//         }
//     }
// });
//   }

//   addTermToTableDisplay() {
//     this.http.post('http://localhost:8080/tuning/add', { term: this.searchTerm }).subscribe(
//       () => {
//         console.log('Term added to table.');
//       }
//     );
//   }
// }
  // onLoadData(): void {
  //   if (!this.isDataLoaded) {
  //     this.elasticsearchService.fetchData().subscribe(response => {
  //       this.data = response.hits.hits.map((hit: any) => hit._source);
  //       this.isDataLoaded = true;
  //     });
  //   }
  // }

