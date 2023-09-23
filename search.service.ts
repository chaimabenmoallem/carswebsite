
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cars } from '../pages/addimage/cars';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl= "http://localhost:8080"

  constructor(private http: HttpClient) { }
  
// Modify your service method in Angular to return multiple matches


// searchCarByPriority(terms: string[]): Observable<cars[]> {
//   const termPath = terms.join('_');
//   return this.http.get<cars[]>(`${this.baseUrl}/drop/api/related-options/search/${termPath}`);
// }

getCarDetailsByTerm(terms: string[]): Observable<cars[]> {
  const termPath = terms.join('_');
  console.log('Sending request for combination:', termPath);
  const url = `${this.baseUrl}/drop/api/related-options/search/${termPath}`;
  return this.http.get<cars[]>(url);
}



  search(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/request?query=${term}`);
  }

  // sendSearchTerm(term: string) {
  //   return this.http.post('http://localhost:8080/search/term', term);
  // }

  getCombinedAutoSuggestions(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/drop/api/related-options/autocomplete/combined?prefix=${term}`);
}

  getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/drop/api/related-options/all`);
  }
  
//   searchCarByDetails(searchTerm: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/drop/api/related-options/search/${searchTerm}`);
// }



}








/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cars } from '../pages/addimage/cars';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl= "http://localhost:8080"

  constructor(private http: HttpClient) { }
  
// Modify your service method in Angular to return multiple matches
searchCarByPriority(terms: string[]): Observable<cars[]> {
  const termPath = terms.join('_');
  return this.http.get<cars[]>(`${this.baseUrl}/drop/api/related-options/search/${termPath}`);
}




  search(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/request?query=${term}`);
  }

  // sendSearchTerm(term: string) {
  //   return this.http.post('http://localhost:8080/search/term', term);
  // }

  getCombinedAutoSuggestions(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/drop/api/related-options/autocomplete/combined?prefix=${term}`);
}

  getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/drop/api/related-options/all`);
  }
  
  searchCarByDetails(searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/drop/api/related-options/search/${searchTerm}`);
}


}
*/
