import { NgModule } from '@angular/core';
import { ConvertMoneyPipe } from './convert-money.pipe';
import { ReplacePipe } from './replace.pipe';

@NgModule({
    declarations: [
        ConvertMoneyPipe,
        ReplacePipe
    ],
    exports: [
        ConvertMoneyPipe,
        ReplacePipe
    ]
})
export class AppPipeModule {

}