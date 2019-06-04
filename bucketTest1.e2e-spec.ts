import { Helper } from '../helper.po';
import { BucketsPage } from './buckets.po';

describe('RGW Buckets Page', () => {
  let page: BucketsPage;
  var nameBox      = element(by.name('bid'))
  var ownerDrop    = element(by.name('owner'))
  var createButton = element(by.buttonText('Create Bucket'))
  var createButton = element(by.buttonText('Cancel'))

  describe('Make a test bucket', () => {
    it('Should create a bucket', () => {
      nameBox.click()
      nameBox.sendKeys()
    }
  }
}
