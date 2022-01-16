import { TestBed } from '@angular/core/testing';

import { AssetPriceService } from 'src/app/services/asset-price.service';

describe('StockPriceService', () => {
  let service: AssetPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
