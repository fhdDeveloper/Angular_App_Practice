import { Component } from '@angular/core';

@Component({
  selector: 'resurant-block',
  templateUrl: 'resturantBlock.html',

})
export class ResturantBlock {
  moreTitle = 'Read More..';
  goToResturant(){
    console.log('salanmmmm');
  }
  url='/components/resturantBlock/resturantDetail.html'
}
