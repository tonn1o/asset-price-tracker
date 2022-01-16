import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AssetListComponent } from 'src/app/pages/asset-price-tracker/asset-list/asset-list.component';
import { AssetPriceTrackerComponent } from 'src/app/pages/asset-price-tracker/asset-price-tracker.component';
import { AddAssetFormComponent } from 'src/app/pages/asset-price-tracker/add-asset-form/add-asset-form.component';
import { AssetListItemComponent } from 'src/app/pages/asset-price-tracker/asset-list-item/asset-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconButtonModule } from 'src/app/components/icon-button/icon-button.module';

@NgModule({
  declarations: [
    AssetPriceTrackerComponent,
    AddAssetFormComponent,
    AssetListComponent,
    AssetListItemComponent,
  ],
  exports: [AssetPriceTrackerComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, IconButtonModule],
})
export class AssetPriceTrackerModule {}
