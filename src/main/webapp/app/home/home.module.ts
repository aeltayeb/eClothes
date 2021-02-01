import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {CardModule} from 'primeng-lts/card';

@NgModule({
  imports: [StoreSharedModule, RouterModule.forChild([HOME_ROUTE]), CardModule],
  declarations: [HomeComponent],
})
export class StoreHomeModule {}
