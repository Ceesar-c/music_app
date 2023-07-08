import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistadosPageRoutingModule } from './vistados-routing.module';

import { VistadosPage } from './vistados.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistadosPageRoutingModule
  ],
  declarations: [VistadosPage]
})
export class VistadosPageModule {}
