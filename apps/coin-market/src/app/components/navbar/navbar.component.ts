import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'coin-market-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    @ViewChild('expandMenu') expandMenu: ElementRef;

    hamburgerToggle() {
        this.expandMenu.nativeElement.classList.toggle('expanded');

        document.body.classList.toggle('overflow-hidden');
    }
}
