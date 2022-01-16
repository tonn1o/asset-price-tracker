import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPriceTrackerComponent } from 'src/app/pages/asset-price-tracker/asset-price-tracker.component';

describe('StockPriceTrackerComponent', () => {
  let component: AssetPriceTrackerComponent;
  let fixture: ComponentFixture<AssetPriceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPriceTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPriceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
