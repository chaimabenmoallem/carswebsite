import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddTermService {

  constructor(private http : HttpClient) { }


//   onSearchTermSubmit(term: string) {
//     this.http.post('http://localhost:8080/tuning', { term }).subscribe({
//         next: (response) => {
//             // Term exists and was incremented.
//         },
//         error: (error) => {
//             if (error.status === 404) {  // Term not found
//                 this.addTermToTableDisplayProject(term);
//             }
//         }
//     });
// }

// addTermToTableDisplayProject(term: string) {
//     const newTerm = {
//         term: term,
//         occurrences: 1
//     };
//     this.http.post('http://localhost:8080/tuning', newTerm).subscribe({
//         next: (response) => {
//             // Term was added to the table in the Table Display Project
//         },
//         error: (error) => {
//             // Handle any errors
//         }
//     });
// }

}
