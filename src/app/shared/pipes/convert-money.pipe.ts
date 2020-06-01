import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertMoney'
})
export class ConvertMoneyPipe implements PipeTransform{

    transform(value: string, currencyFormat: string) {
        return currencyFormat + " " + value;
    }
}