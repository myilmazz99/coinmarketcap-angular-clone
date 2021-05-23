export class CalendarDateRange {
    start: Date;
    end: Date;

    constructor(start?: Date, end?: Date) {
        this.start = start || null;
        this.end = end || null;
    }
}
