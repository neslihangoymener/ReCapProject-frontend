import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded=false;
  
  constructor(private CarService:CarService) { }

  ngOnInit(): void {
    //console.log("Init çalıştı");
    this.getCars();
  }
getCars(){
  //console.log("Api request başladı");
    this.CarService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
      //console.log("Api request bitti");
    })
    //console.log("Metod bitti");
}
}