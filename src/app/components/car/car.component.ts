import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : CarDetailsDto[] = [];
  currentCar: CarDetailsDto = {
    carId: 0,
    brandName: '',
    colorName: '',
    dailyPrice: 0,
    description:'',    
    modelYear:0,
  };
  dataStatus : boolean = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCarsDetails().subscribe(response=>{
      this.cars = response.data
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      if(response.success){
        this.dataStatus = true;
      }
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      if(response.success){
        this.dataStatus = true;
      }
    });
  }

  setCurrentCar(car: CarDetailsDto) {
    this.currentCar = car;
    console.log(car);
  }
  
}