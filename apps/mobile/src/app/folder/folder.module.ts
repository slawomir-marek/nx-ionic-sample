import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@nx-ionic-sample/shared';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, FolderPageRoutingModule],
  declarations: [FolderPage],
})
export class FolderPageModule {}
