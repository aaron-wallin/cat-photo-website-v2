import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html'
})

export class PortfolioMainComponent {
    @Input() portfolio: any = {};
}
