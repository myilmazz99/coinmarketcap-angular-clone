import { NgModule } from '@angular/core';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CalendarComponent } from '../libs/ui/src/lib/calendar/calendar.component';
import { UiModule } from '../libs/ui/src/lib/ui.module';
import * as predefinedDatesStories from './predefined-dates.stories';
import { CalendarDateRange } from '../libs/data/src/lib/models/ui-calendar/date-range.model';
import { subDays } from 'date-fns';

@NgModule({
imports: [UiModule],
exports: [CalendarComponent],
})
class myModule {}

export default {
    component: CalendarComponent,
    decorators: [
        moduleMetadata({
            imports: [myModule],
        }),
    ],
    title: 'Chart Calendar',
} as Meta;

const actionData = {
closeMenuEvent: action('closeMenuEvent'),
dateRangeEvent: action('dateRangeEvent'),
};

const Template: Story<CalendarComponent> = (args) => ({
props: {
...args,
closeMenuEvent: actionData.closeMenuEvent,
dateRangeEvent: actionData.dateRangeEvent,
},
});

export const Default = Template.bind({});
Default.args = {
    predefinedDates: predefinedDatesStories.Default.args.predefinedDates,
};

export const WithSelectedRangeDefined = Template.bind({});
WithSelectedRangeDefined.args = {
    ...Default.args,
    selectedRange: new CalendarDateRange(subDays(new Date(), 5), new Date()),
};
