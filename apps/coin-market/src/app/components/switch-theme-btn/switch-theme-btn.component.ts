import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
    selector: 'coin-market-switch-theme-btn',
    templateUrl: './switch-theme-btn.component.html',
    styleUrls: ['./switch-theme-btn.component.scss'],
})
export class SwitchThemeBtnComponent implements OnInit {
    KEY_DARK_MODE = 'dark-mode';
    CLASS_DARK_MODE = 'dark-theme';

    constructor(private localStorage: LocalStorageService) {}

    ngOnInit(): void {
        const result = this.localStorage.getItem(this.KEY_DARK_MODE);

        if (result) document.body.classList.add(this.CLASS_DARK_MODE);
    }

    switchTheme() {
        document.body.classList.toggle(this.CLASS_DARK_MODE);

        const result = this.localStorage.getItem(this.KEY_DARK_MODE);

        if (result) this.localStorage.removeItem(this.KEY_DARK_MODE);
        else this.localStorage.setItem(this.KEY_DARK_MODE, 'true');
    }
}
