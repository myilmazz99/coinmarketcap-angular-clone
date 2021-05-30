export class ChartDataTab {
    text: 'Price' | 'Market Cap';
    textJson: 'price' | 'marketCap';

    constructor(item?: any) {
        (this.text = item?.text || 'Price'),
            (this.textJson = item?.textJson || 'price');
    }
}
