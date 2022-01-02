import { Pipe, PipeTransform } from '@angular/core';
import { Offer } from "../offer.model";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(offers: Offer[], search: string): Offer[] {
    if(!offers || !search ) {
      return  offers;
    }
    return offers.filter(offer => offer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))   ;
  }

}
