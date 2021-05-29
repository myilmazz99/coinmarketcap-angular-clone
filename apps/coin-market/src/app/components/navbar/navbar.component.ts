import { Component } from '@angular/core';

@Component({
    selector: 'coin-market-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    switchTheme() {
        document.body.classList.toggle('dark-theme');
    }
}
