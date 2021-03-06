import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Food } from './food';
import { FoodInfo } from './foodInfo';
import { FoodService } from './food.service';
@Component({
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  food: Food;
  foodInfo: FoodInfo;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.foodService.getFoodInfo(params.get('id')))
      .subscribe(foodInfo => this.foodInfo = foodInfo);
  }
  save(): void {
    this.foodService.update(this.foodInfo)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
