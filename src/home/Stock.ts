export interface AppName {
  Appname: string;
  versionNo:string;
}
export class Stock {
    company: string ='';
    ticker: string ='';
    stockPrice: string = '';
    timeElapsed: string = '';
    
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.company) this.company = initializer.company;
      if (initializer.ticker) this.ticker = initializer.ticker;
      if (initializer.stockPrice) this.stockPrice = initializer.stockPrice;
      if (initializer.timeElapsed) this.timeElapsed = initializer.timeElapsed;
      }
  }