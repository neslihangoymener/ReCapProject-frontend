import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetailsDto } from '../models/carDetailsDto';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44367/api/';

  constructor(private httpClient: HttpClient) { }

  getCarsDetails():Observable<ListResponseModel<CarDetailsDto>>
  { let newPath=this.apiUrl+"cars/GetCarDetails"
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + "cars/GetAllByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = this.apiUrl + "cars/GetAllByColorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetailsDto>>{
    let newPath=this.apiUrl+ "cars/getcardetailsbycarid?carid=" +carId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath)
  }

}