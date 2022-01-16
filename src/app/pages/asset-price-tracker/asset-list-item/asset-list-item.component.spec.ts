import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListItemComponent } from 'src/app/pages/asset-price-tracker/asset-list-item/asset-list-item.component';

describe('AssetListItemComponent', () => {
  let component: AssetListItemComponent;
  let fixture: ComponentFixture<AssetListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
