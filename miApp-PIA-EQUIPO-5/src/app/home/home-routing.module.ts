import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PublicacionesComponent } from '../publicaciones/publicaciones.component';
import { PostsPage } from '../posts/posts.page';
import { FotosPage } from '../fotos/fotos.page';
import { FotosPageModule } from '../fotos/fotos.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'Posts',
        children:[
          {
          path:'',
          loadChildren: () => import('../posts/posts.module').then(m => m.PostsPageModule)
        }
      ]
      },
      {
        path:'fotos',
        children:[
          {
          path:'',
          loadChildren: () => import('../fotos/fotos.module').then(m => m.FotosPageModule)
        }
      ]
      },
      {
        path:'Perfil',
        children:[
          {
          path:'',
          loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
        }
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
