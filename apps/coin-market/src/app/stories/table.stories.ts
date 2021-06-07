import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../../src/app/shared/table/table.component';
import { TableModule } from '../../../src/app/shared/table/table.module';
import { rest } from 'msw';

@NgModule({
    imports: [TableModule, BrowserAnimationsModule, HttpClientModule],
    exports: [TableComponent],
})
class myModule {}

export default {
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [myModule],
        }),
    ],
    title: 'Table Component',
} as Meta;

const actionsData = {
    selectedEvent: action('selectedEvent'),
};

const Template: Story<TableComponent> = (args) => ({
    props: {
        ...args,
        selectedEvent: actionsData.selectedEvent,
    },
});

export const Default = Template.bind({});

Default.args = {
    dataSource: [
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
    ],
};

export const WithNoData = Template.bind({});
