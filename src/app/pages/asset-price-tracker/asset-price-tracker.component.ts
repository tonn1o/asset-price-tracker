import { Component } from '@angular/core';
import { AssetPriceService } from 'src/app/services/asset-price.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-asset-price-tracker',
  templateUrl: './asset-price-tracker.component.html',
  styleUrls: ['./asset-price-tracker.component.scss'],
})
export class AssetPriceTrackerComponent {
  get trackedAssets(): string[] {
    return Array.from(this._trackedAssets);
  }

  private _trackedAssets = new Set<string>();

  constructor(
    private stockPriceService: AssetPriceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParamMap
      .pipe(
        filter((paramMap) => paramMap.has('isinList')),
        first(),
      )
      .subscribe((queryParamMap) => {
        const isinList = queryParamMap.get('isinList');

        if (isinList) {
          this.initIsinList(isinList.split(','));
        }
      });
  }

  trackStockPrice(isin: string): void {
    if (this._trackedAssets.has(isin)) {
      alert('You are already tracking asset with this ISIN');
      return;
    }

    this._trackedAssets.add(isin);
    this.stockPriceService.trackAssetPrice(isin);
    this.updateQueryParams();
  }

  removeAsset(isin: string): void {
    this._trackedAssets.delete(isin);
    this.stockPriceService.stopTrackingAssetPrice(isin);
    this.updateQueryParams();
  }

  private initIsinList(list: string[]): void {
    list.forEach((isin) => {
      if (!this._trackedAssets.has(isin)) {
        this._trackedAssets.add(isin);
        this.stockPriceService.trackAssetPrice(isin);
      }
    });
  }

  private updateQueryParams() {
    this.router.navigate(['/'], {
      replaceUrl: true,
      queryParams: {
        isinList: this.trackedAssets.join(','),
      },
    });
  }
}
