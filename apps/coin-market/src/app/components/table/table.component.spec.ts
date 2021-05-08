import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { MaterialModule } from '../../shared/material.module';
import { MarketsService } from '../../shared/services/markets.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntModule } from '../../shared/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                AntModule,
                FormsModule,
            ],
            declarations: [TableComponent],
            providers: [{ provide: MarketsService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
