import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class ShopPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value==22){
      return 'http://pngimg.com/uploads/mastercard/mastercard_PNG6.png';
    }
    else
    return "http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png";
  }

}
