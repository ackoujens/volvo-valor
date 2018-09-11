import { PostsModule } from './posts/posts.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactComponent } from './contact/contact.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  /*{
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => PostsModule
  },*/
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'fileupload',
    component: FileUploadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
