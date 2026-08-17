import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { Notfound } from './components/notfound/notfound';
import { PrivacyPage } from './components/privacy-page/privacy-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyPage },
  { path: '**', component: Notfound },
];
