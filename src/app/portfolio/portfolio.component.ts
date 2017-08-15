import { Component } from '@angular/core';
import { PortfolioMainComponent } from './portfolio-main.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  portfolioList: any = [
    {
      imagePath: 'assets/img/events/04.jpg',
      id: 'portfolioModal2',
      title1: "Events",
      title2: "Event Photography",
      subTitle1: "Samples of my photos at various events",
      portfolioImages: [
        { imagePath: 'assets/img/events/02.jpg', isActive: 'active' },
        { imagePath: 'assets/img/events/03.jpg', isActive: '' },
        { imagePath: 'assets/img/events/04.jpg', isActive: '' },
        { imagePath: 'assets/img/events/05.jpg', isActive: '' },
      ]
    },
    {
      imagePath: 'assets/img/events/05.jpg',
      id: 'portfolioModal3',
      title1: "Portraits",
      title2: "Portrait Photography",
      subTitle1: "Samples of portraits",
      portfolioImages: [        
        { imagePath: 'assets/img/events/06.jpg', isActive: '' },
        { imagePath: 'assets/img/events/07.jpg', isActive: '' },
        { imagePath: 'assets/img/events/08.jpg', isActive: '' },
        { imagePath: 'assets/img/events/09.jpg', isActive: 'active' },
      ]
    }

  ];
}
