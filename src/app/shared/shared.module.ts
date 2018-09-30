import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '..//material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule, BrowserAnimationsModule],
  exports: [CommonModule, FormsModule, RouterModule, MaterialModule, NavbarComponent],
  declarations: [NavbarComponent]
})
export class SharedModule {}
