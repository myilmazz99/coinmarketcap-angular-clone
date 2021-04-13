import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Pair } from '../../models/pair';

@Component({
    selector: 'coin-market-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements AfterViewInit {
    @Input() selectedValue: Pair;
    @Input() pairs: Pair[];
    @ViewChild(MatSelect) select: MatSelect;

    @Output() newItemEvent = new EventEmitter<string>();

    showSelectValue(value) {
        this.newItemEvent.emit(value);
    }
    ngAfterViewInit() {}
}
