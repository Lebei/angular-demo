import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodService} from './food.service';

@Component({
  selector: 'app-previewimg',
  templateUrl: './previewimg.component.html',
  styleUrls: ['./previewimg.component.css']
})
export class PreviewimgComponent implements OnInit {

  @Input()
  previewImgFile
  @Output()
  previewImgFileChange: EventEmitter<string> = new EventEmitter();

  previewImgSrcs = [];

  constructor(public foodService: FoodService) { }

  ngOnInit() {
  }
  previewPic(event) {
    if (!event.target.files[0]) {
      return;
    }
    const that = this;
    this.foodService.readAsDataUrl(event.target.files[0]).then(function(result) {
      that.previewImgSrcs.push(result)
      const file = event.target.files[0];
      that.previewImgFile.push(file);
      that.previewImgFileChange.emit(that.previewImgFile);
    });

  }
  remove(i) {
    this.previewImgSrcs.splice(i, 1);
    this.previewImgFile.splice(i, 1);
  }
}
