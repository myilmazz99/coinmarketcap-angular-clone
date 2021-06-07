import { addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

initializeWorker();
addDecorator(mswDecorator);
addDecorator(withKnobs);
