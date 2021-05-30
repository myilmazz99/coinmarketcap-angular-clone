import { CalendarDateRange } from '../ui-calendar/date-range.model';

export class ChartDateRange {
    value: '1D' | '7D' | '1M' | '3M' | '1Y' | 'ALL' | 'YTD';
    dateRange: CalendarDateRange;

    constructor(item?: any) {
        this.value = item?.value || 'ALL';
        this.dateRange = item?.dateRange || new CalendarDateRange();
    }
}
