import { Injectable } from '@angular/core';

import { Food } from './food';
import { FoodInfo } from './foodInfo';
import { FOODS } from './mock-foods';
import 'rxjs/add/operator/toPromise';
import { Http, Headers } from '@angular/http';
@Injectable()
export class FoodService {
  private api_url = '/tms-web/sys/mobile/getFoodInfo?id=';
  constructor(private http: Http) {}
  getFoods(): Promise<Food[]> {
    return Promise.resolve(FOODS);
  }
  getFoodInfos(): Promise<FoodInfo[]> {
    const url = `/tms-web/sys/mobile/getFoodInfoListData`;
    return this.http
      .post(url, {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
      .toPromise()
      .then(response => response.json().rows as FoodInfo[])
      .catch(this.handleError);
  }
  getFoodInfo(id: string): Promise<FoodInfo> {
    const url = `${this.api_url}${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as FoodInfo)
      .catch(this.handleError);
  }
  search(foodInfo: FoodInfo): Promise<FoodInfo[]> {
    const url = `/tms-web/sys/mobile/getFoodInfoListData`;
    return this.http
      .post(url, 'foodInfo=' + JSON.stringify(foodInfo), {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
      .toPromise()
      .then(response => response.json().rows as FoodInfo[])
      .catch(this.handleError);
  }
  add(foodInfo: FoodInfo): Promise<FoodInfo> {
    const url = `/tms-web/sys/mobile/add`;
    return this.http
      .post(url, 'foodInfo=' + JSON.stringify(foodInfo), {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
      .toPromise()
      .then(response => response.json() as FoodInfo)
      .catch(this.handleError);
  }
  update(foodInfo: FoodInfo): Promise<FoodInfo> {
    const url = `/tms-web/sys/mobile/edit?id=${foodInfo.id}`;
    return this.http
      .post(url, 'foodInfo=' + JSON.stringify(foodInfo), {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})})
      .toPromise()
      .then(() => foodInfo)
      .catch(this.handleError);
  }
  logout() {
    this.http
      .post('/tms-web/sys/mobile/logout', {
        headers: new Headers().set('Content-Type', 'application/x-www-form-urlencoded')
      })
      // See below - subscribe() is still necessary when using post().
      .subscribe();
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getFood(id: number): Promise<Food> {
    return this.getFoods()
      .then(foods => foods.find(food => food.id === id));
  }

  getReader(resolve, reject) {
    const reader = new FileReader();
    reader.onload = this.Onload(reader, resolve);
    reader.onerror = this.OnError(reader, reject);
    return reader;
  }
  readAsDataUrl(file) {
    const that = this;
    return new Promise(function(resolve, reject){
      const reader = that.getReader(resolve, reject);
      reader.readAsDataURL(file);
    });
  }

  Onload(reader: FileReader, resolve) {
    return () => {
      resolve(reader.result);
    };
  }

  OnError(reader: FileReader, reject) {
    return () => {
      reject(reader.result);
    };
  }
}
