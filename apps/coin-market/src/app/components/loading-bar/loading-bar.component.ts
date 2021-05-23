import { AfterViewInit, Component } from '@angular/core';
import {
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router,
} from '@angular/router';

@Component({
    selector: 'coin-market-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements AfterViewInit {
    element: Element;
    elementClass = 'loading-progress-bar__bar';

    constructor(private router: Router) {}

    ngAfterViewInit(): void {
        this.element = document.querySelector('.' + this.elementClass);

        this.router.events.subscribe((event) => {
            if (event instanceof RouteConfigLoadStart) {
                this.element.classList.add('start');
            } else if (event instanceof RouteConfigLoadEnd) {
                this.element.classList.add('end');
                setTimeout(
                    () => (this.element.className = this.elementClass),
                    500
                );
            }
        });
    }
}
