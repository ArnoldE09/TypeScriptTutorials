export class Stock {
    company: string | undefined;
    ticker?: string ;
    stockPrice: string = '';
    timeElapsed: string = '';
    
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.company) this.company = initializer.id;
      if (initializer.ticker) this.ticker = initializer.userId;
      if (initializer.stockPrice) this.stockPrice = initializer.title;
      if (initializer.timeElapsed) this.timeElapsed = initializer.body;
      }
  }