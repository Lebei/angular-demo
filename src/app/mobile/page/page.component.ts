import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'page',
  templateUrl: './page.component.html',
})
export class PageComponent {
  @Input('pageParams') pageParams;
  @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;

  constructor() {
    const self = this;

  }
  getPageList(pageParams) {
    console.log(pageParams);
    pageParams = eval('pageParams');
    /**
     * 分页设置
     */
    const pageList = [];
    if (pageParams.totalPage <= pageParams.pageData) {
      for (let i = 0; i < pageParams.totalPage; i++) {
        pageList.push({
          pageNo: i + 1
        });
      }

    } else if (pageParams.totalPage - pageParams.curPage < pageParams.totalPage && pageParams.curPage > pageParams.totalPage - 1) {
      for (let i = pageParams.curPage; i > pageParams.totalPage - pageParams.curPage; i--) {
        pageList.push({
          pageNo: pageParams.curPage - i + 1
        });
      }
    } else {
      for (let i = 0; i < pageParams.totalPage; i++) {
        pageList.push({
          pageNo: i + 1
        });
      }
    }
    return pageList;
  }
  changePage(pageNo) {
    const self = this;
    self.pageParams.curPage = pageNo;
    self.changeCurPage.emit(self.pageParams.curPage);


  }

}
