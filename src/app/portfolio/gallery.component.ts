import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',

})
export class GalleryComponent implements OnInit { 

  constructor(private _routeParams: ActivatedRoute) { }
  
  ngOnInit(): void {
    this._routeParams.params.subscribe((params: {id: string}) => {
      this.selectedGallery = this.galleryList[params.id];     
    });
  }

  selectedGallery: any = [];
  galleryList: any = [
    {      
      id: 'events',
      imageList: [
        { imagePath: 'assets/img/events/01.jpg' },
        { imagePath: 'assets/img/events/02.jpg' },
        { imagePath: 'assets/img/events/03.jpg' },
        { imagePath: 'assets/img/events/04.jpg' },
        { imagePath: 'assets/img/events/05.jpg' },
        { imagePath: 'assets/img/events/06.jpg' },
        { imagePath: 'assets/img/events/07.jpg' },
        { imagePath: 'assets/img/events/08.jpg' },
        { imagePath: 'assets/img/events/09.jpg' },
        { imagePath: 'assets/img/events/10.jpg' },
      ]
    },
    {      
      id: 'portraits',
      imageList: [
        { imagePath: 'assets/img/portraits/01.jpg' },
        { imagePath: 'assets/img/portraits/02.jpg' },
        { imagePath: 'assets/img/portraits/03.jpg' },
        { imagePath: 'assets/img/portraits/04.jpg' },
        { imagePath: 'assets/img/portraits/05.jpg' },
        { imagePath: 'assets/img/portraits/06.jpg' },
        { imagePath: 'assets/img/portraits/07.jpg' },
        { imagePath: 'assets/img/portraits/08.jpg' },
        { imagePath: 'assets/img/portraits/09.jpg' },
        { imagePath: 'assets/img/portraits/10.jpg' },
      ]
    }, {      
      id: 'beforeafter',
      imageList: [
        { imagePath: 'assets/img/before-after/01.jpg' },
        { imagePath: 'assets/img/before-after/02.jpg' },
        { imagePath: 'assets/img/before-after/03.jpg' },
        { imagePath: 'assets/img/before-after/04.jpg' },
        { imagePath: 'assets/img/before-after/05.jpg' },
        { imagePath: 'assets/img/before-after/06.jpg' },
        { imagePath: 'assets/img/before-after/07.jpg' },
        { imagePath: 'assets/img/before-after/08.jpg' },
        { imagePath: 'assets/img/before-after/09.jpg' },
      ]
    },
    {      
      id: 'sports',
      imageList: [
        { imagePath: 'assets/img/sports/01.jpg' },
        { imagePath: 'assets/img/sports/02.jpg' },
        { imagePath: 'assets/img/sports/03.jpg' },
        { imagePath: 'assets/img/sports/04.jpg' },
        { imagePath: 'assets/img/sports/05.jpg' },
        { imagePath: 'assets/img/sports/06.jpg' },
        { imagePath: 'assets/img/sports/07.jpg' },
        { imagePath: 'assets/img/sports/08.jpg' },
        { imagePath: 'assets/img/sports/09.jpg' },
      ]
    },
    {      
      id: 'wildlife',
      imageList: [
        { imagePath: 'assets/img/wildlife/01.jpg' },
        { imagePath: 'assets/img/wildlife/02.jpg' },
        { imagePath: 'assets/img/wildlife/03.jpg' },
        { imagePath: 'assets/img/wildlife/04.jpg' },
        { imagePath: 'assets/img/wildlife/05.jpg' },
      ]
    }
  ];
}
