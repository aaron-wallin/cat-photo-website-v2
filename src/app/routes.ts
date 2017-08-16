import {Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './portfolio/gallery.component';

export const appRoutes: Routes = [
    {path: 'home', component: HeaderComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
]