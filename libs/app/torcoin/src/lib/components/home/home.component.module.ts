import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    NbCardModule,
    NbIconModule,
    RouterModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeComponentModule {}
