import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/carImage';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cars:CarDetailsDto[]
  images:CarImage[];
  urlPath:string="https://localhost:44367/CarImages/"
  
  constructor(private carService:CarService,
    private activatedRoot:ActivatedRoute,
    private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"])
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }

  getCarDetail(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response=>{
     this.cars=response.data
    })
     
  }
  getCarImagesByCarId(carId:number){
    this.carDetailService.getCarImagesByCarId(carId).subscribe(response=>{
     this.images=response.data
    })
     
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}