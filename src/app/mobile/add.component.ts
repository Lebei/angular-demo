import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FoodInfo } from './foodInfo';
import { FoodService } from './food.service';
@Component({
  templateUrl: './add.component.html'
})
export class AddComponent {
  foodInfo: FoodInfo;
  missionType: string;
  missionResource: string;
  beSampleEnt: string;
  entAddress: string;
  location: string;
  regionType: string;
  entLeader: string;
  sales: string;
  license: string;
  licence: string;
  entLinkMan: string;
  entPhone: string;
  entFax: string;
  entPostCode: string;
  annualRing: string;
  circulation: string;
  catrringLink: string;
  place: string;
  sampleResource: string;
  sampleProperty: string;
  classify: string;
  packageGroup: string;
  sampleType: string;
  samtInfo: string;
  product: string;
  brand: string;
  stageDate: number;
  sampleStage: string;
  sampleDate: number;
  type: string;
  batch: string;
  warranty: string;
  gb: string;
  grade: string;
  qs: string;
  unitPrice: string;
  exit: string;
  base: string;
  sampleNum: string;
  reserveNum: string;
  sampleForm: string;
  productOrg: string;
  productAddress: string;
  productLinkMan: string;
  productPhone: string;
  storageCondition: string;
  temperature: string;
  deadLine: number;
  sendAddress: string;
  packager: string;
  sampleMold: string;
  sampleMan: string;
  remark: string;
  previewImgFile;

  constructor(
    private foodService: FoodService,
    private locations: Location
  ) {}
  onSubmit(value) {
    this.foodService.add(value)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.locations.back();
  }
}
