import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent {
  @Input() isinList: string[] = [];
  @Output() removeAsset = new EventEmitter<string>();

  trackByIsin(idx: number, isin: string): string {
    return isin;
  }
}
