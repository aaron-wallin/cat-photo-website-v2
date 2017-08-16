import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit { 
  
  ngOnInit(): void {
    this.selectedGallery = this.galleryList[0];
  }

  selectedGallery: any = [];
  galleryList: any = [
    {      
      id: 'events',
      title: 'Events',
      bgImagePath: 'assets/img/events/08.jpg',        
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
      ]
    }
  ];
}
