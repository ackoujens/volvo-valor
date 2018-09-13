import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemListComponent } from './inventory/item-list/item-list.component';
import { ItemComponent } from './inventory/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSizePipe } from './fileSize.pipe';
import { DropZoneDirective } from './drop-zone.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SimpleDialogComponent } from './simpledialog/simpledialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PostsModule } from './posts/posts.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      PostsComponent,
      UsersComponent,
      DetailsComponent,
      ServerComponent,
      ServersComponent,
      TodoComponent,
      HomeComponent,
      ContactComponent,
      InventoryComponent,
      ItemComponent,
      ItemListComponent,
      SimpleDialogComponent,
      FileUploadComponent,
      FileSizePipe,
      DropZoneDirective,
      LoginComponent,
      AdminComponent
   ],
   entryComponents: [
      SimpleDialogComponent
   ],
   imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      AngularFireAuthModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      CoreModule,
      SharedModule,
      PostsModule
   ],
   schemas: [ NO_ERRORS_SCHEMA ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
