import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html'
})
export class PortfolioDetailComponent { 
  @Input() portfolio: any = {};
}
