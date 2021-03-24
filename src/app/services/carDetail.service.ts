import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailAndImagesDto } from '../models/CarDetailAndImagesDto';
import { ItemResponseModel } from '../models/ItemResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:Number):Observable<ItemResponseModel<CarDetailAndImagesDto>>{
    let newPath = environment.apiUrl +'cars/getcardetail?carId='+carId;
    return this.httpClient.get<ItemResponseModel<CarDetailAndImagesDto>>(newPath);
  }

}