import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TomFotoComponent } from './tomfoto/tomfoto.component';
import { PubfotoComponent } from './pubfoto/pubfoto.component';
import { ShowphotosComponent } from './showphotos/showphotos.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'tomfoto', component: TomFotoComponent },
  { path: 'pubfoto', component: PubfotoComponent },
  { path: 'showphotos', component: ShowphotosComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
