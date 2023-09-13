import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private imageUrlSource = new BehaviorSubject<string | null>(null);
  currentImageUrl = this.imageUrlSource.asObservable();
  
  private carDetailsSource = new BehaviorSubject<any[]>([]);
  currentCarDetails = this.carDetailsSource.asObservable();
  

  
  
  constructor() { }

  changeImageUrl(imageUrl: string) {
    this.imageUrlSource.next(imageUrl);
  }

  changeCarDetails(data: any[]) {
    this.carDetailsSource.next(data);
}


}
