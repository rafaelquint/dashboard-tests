import { browser, element, by, Key } from 'protractor';

export class BucketsPage {
  navigateTo() {
    return browser.get('/#/rgw/bucket');
  }
  getBucketTable() {
    return element.all(by.css('datatable-body'))
  }
  getNewBucketEntry() {
    return element.all(by.class('datatable-row-center.datatable-row-group.ng-star-inserted')).last()
  }
  getBucketName() {
    return element.all(by.css('datatable-body-cell.sort-active.ng-star-inserted')).element(by.css('datatable-body-cell-label')).element(by.css('ng-star-inserted'))
  }
  getBucketOwner() {
    return element.all(by.class('datatable-body-cell.sort.active.ng-star-inserted'))
  }
  getBucketCount() {
    return element.all(by.class('page-count.ng-star-inserted'))
  }
}

export class BucketsCreatePage {
  navigateTo() {
    return browser.get('/#/rgw/bucket/create')
  }
  getCreateHeading() {
    return element.all(by.c)
  }
