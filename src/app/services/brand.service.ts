import { Brand } from '../models/brand';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BrandService {

  //apiUrl = 'https://localhost:44367/api/brands/getall';
  apiUrl = environment.apiUrl +'brands/getall';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}