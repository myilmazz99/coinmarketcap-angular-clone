import { PredefinedDatesComponent } from '../libs/ui/src/lib/calendar/predefined-dates/predefined-dates.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [PredefinedDatesComponent],
    exports: [PredefinedDatesComponent],
})
class myModule {}

export default {
    component: PredefinedDatesComponent,
    decorators: [
        moduleMetadata({
            imports: [myModule],
        }),
    ],
    title: 'Predefined Dates',
} as Meta;

const actionsData = {
    predefinedDateEvent: action('predefinedDateEvent'),
};

const Template: Story<PredefinedDatesComponent> = (args) => ({
    props: {
        ...args,
        predefinedDateEvent: actionsData.predefinedDateEvent,
    },
});

export const Default = Template.bind({});
Default.args = {
    predefinedDates: [10, 20, 30],
};

export const WithMoreOptions = Template.bind({});
WithMoreOptions.args = {
    ...Default.args,
    predefinedDates: [10, 20, 30, 40, 50, 60, 70, 80],
};
