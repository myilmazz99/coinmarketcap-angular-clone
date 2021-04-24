import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

const modules: any[] = [NzButtonModule, NzPopoverModule];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class AntModule {}
