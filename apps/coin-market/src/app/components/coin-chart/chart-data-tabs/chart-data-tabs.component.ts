import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ChartDataTabs } from '../../../models/chart-data-tabs.model';

@Component({
    selector: 'chart-data-tabs',
    templateUrl: './chart-data-tabs.component.html',
    styleUrls: ['./chart-data-tabs.component.scss'],
})
export class ChartDataTabsComponent implements AfterViewInit {
    @Input() tabs: ChartDataTabs[];
    @Output() handleDataTabs = new EventEmitter<string>();
    selected: string;

    handleClick(val: string) {
        this.selected = val;
        this.handleDataTabs.emit(val);
    }

    ngAfterViewInit(): void {
        this.selected = this.tabs[0].objProp;
    }
}
