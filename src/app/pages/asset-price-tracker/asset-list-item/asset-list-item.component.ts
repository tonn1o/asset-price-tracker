import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AssetPriceService } from 'src/app/services/asset-price.service';
import { filter, map, takeUntil, throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { appConsts } from 'src/constants';

@Component({
  selector: 'app-asset-list-item',
  templateUrl: './asset-list-item.component.html',
  styleUrls: ['./asset-list-item.component.scss'],
})
export class AssetListItemComponent implements OnInit, OnDestroy {
  readonly faTimes = faTimes;
  readonly currency = appConsts.defaultCurrency;

  @Input() isin!: string;
  @Output() remove = new EventEmitter<void>();

  price: number | null = null;

  private destroyed$ = new Subject();

  constructor(private assetPriceService: AssetPriceService) {}

  ngOnInit(): void {
    this.assetPriceService.assetUpdate$
      .pipe(
        throttleTime(1000),
        filter((data) => data.isin === this.isin),
        map((data) => data.price),
        takeUntil(this.destroyed$),
      )
      .subscribe((price) => {
        this.price = price;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
