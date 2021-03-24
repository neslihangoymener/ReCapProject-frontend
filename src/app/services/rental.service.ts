import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class RentalService {

  //apiUrl = 'https://localhost:44367/api/rentals/getall';

  constructor(private httpClient: HttpClient) { }

  /*getRentals():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }*/
}