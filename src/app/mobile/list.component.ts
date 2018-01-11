import { Component, OnInit } from '@angular/core';

import {Food} from './food';
import {FoodInfo} from './foodInfo';
import {FoodService} from './food.service';

@Component({
  templateUrl: './list.component.html',
  providers: [FoodService]
})
export class ListComponent implements OnInit {
  foods: Food[] = [];
  foodInfos: FoodInfo[] = [];
  foodInfo: FoodInfo;
  odd: string;
  beSampleEnt: string;
  product: string;
  missionResource: string;
  sampleMan: string;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    /*this.foodService.getFoods()
      .then(foods => this.foods = foods);*/
    this.foodService.getFoodInfos()
      .then(foodInfos => this.foodInfos = foodInfos);
  }
  /*search(): void {
    this.foodService.search(this.foodInfo)
      .then(foodInfo => this.foodInfo = foodInfo);
  }*/
  logout(): void {
    this.foodService.logout();
  }
  onSubmit(value) {
    this.foodService.search(value)
      .then(foodInfos => this.foodInfos = foodInfos);
  }

}
