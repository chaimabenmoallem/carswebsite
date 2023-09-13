import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service'
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  imageUrl: string | null = null;
  carDetails: any = {};

  constructor(private sharedDataService: SharedDataService,
    private router: Router ) { }

  ngOnInit(): void {
    this.sharedDataService.currentImageUrl.subscribe(imageUrl => {
      this.imageUrl = imageUrl;
    });
    
    this.sharedDataService.currentCarDetails.subscribe(details => {
      console.log("Received car details:", details);
      this.carDetails = details;
      
      // Log the imageUrl from the carDetails
      this.carDetails.forEach((detail:any) => {
        detail.imageUrl = detail.imageUrl.replace(' ', '%20');
        console.log(detail.imageUrl);
    });
    });
  }

  close(){
    this.router.navigate(['/cars'])
  }
  }
