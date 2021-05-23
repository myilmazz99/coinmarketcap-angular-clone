import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minus',
})
export class MinusPipe implements PipeTransform {
    transform(value: number): number {
        if (value < 0) {
            return Math.abs(value);
        } else {
            return value;
        }
    }
}
