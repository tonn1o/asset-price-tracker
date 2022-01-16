export interface AssetPriceUpdateMessage {
  isin: string;
  price: number;
  bid: number;
  ask: number;
}
