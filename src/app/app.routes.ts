import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'tasks', 
    loadChildren: () => import('./features/tasks/tasks.routes').then(m => m.TASKS_ROUTES)
  },
  { 
    path: 'about', 
    loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
  }
];
