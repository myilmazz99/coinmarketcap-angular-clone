import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { rest } from 'msw';
import { MarketsComponent } from '../components/markets/markets.component';
import { MarketsModule } from '../components/markets/markets.module';

@NgModule({
    imports: [BrowserAnimationsModule, HttpClientModule, MarketsModule],
    exports: [MarketsComponent],
})
class myModule {}

export default {
    component: MarketsComponent,
    decorators: [
        moduleMetadata({
            imports: [myModule],
        }),
    ],
    title: 'Markets Component',
    parameters: {
        msw: [
            rest.get('/assets/data/marketsData.json', (req, res, ctx) => {
                return res(
                    ctx.json([
                        {
                            imageUrl: 'assets/img/Binance.png',
                            market_name: 'Binance',
                            pairs: 'BTC/USD',
                            price: 54462.22,
                            volume: 4018305861,
                            volume_percentage: 6.33,
                            liquidity: 888,
                        },
                        {
                            imageUrl: 'assets/img/Liquid.png',
                            market_name: 'Liquid',
                            pairs: 'BTC/JPY',
                            price: 54479.17,
                            volume: 210098239,
                            volume_percentage: 0.33,
                            liquidity: 419,
                        },
                        {
                            imageUrl: 'assets/img/Binance.png',
                            market_name: 'Galaksiya',
                            pairs: 'BTC/USD',
                            price: 54462.22,
                            volume: 4018305861,
                            volume_percentage: 6.33,
                            liquidity: 888,
                        },
                    ])
                );
            }),
        ],
    },
} as Meta;

const Template: Story<MarketsComponent> = (args) => ({
    props: {
        ...args,
    },
});

export const Default = Template.bind({});
