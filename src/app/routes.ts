import {Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './portfolio/gallery.component';


export const appRoutes: Routes = [    
    {path: '', component: HeaderComponent},
    {path: 'gallery', redirectTo: 'gallery/0'},   
    {path: 'gallery/:id', component: GalleryComponent}    
]