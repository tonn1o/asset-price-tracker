import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetFormComponent } from 'src/app/pages/asset-price-tracker/add-asset-form/add-asset-form.component';

describe('AddIsinFormComponent', () => {
  let component: AddAssetFormComponent;
  let fixture: ComponentFixture<AddAssetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
