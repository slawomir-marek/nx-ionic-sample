import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponentComponent } from './counter-component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    CounterComponentComponent
  ],
  exports: [CounterComponentComponent]
})
export class SharedModule {}
