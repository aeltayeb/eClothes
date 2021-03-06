import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StoreSharedModule } from 'app/shared/shared.module';
import { StoreCoreModule } from 'app/core/core.module';
import { StoreAppRoutingModule } from './app-routing.module';
import { StoreHomeModule } from './home/home.module';
import { StoreEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    StoreSharedModule,
    StoreCoreModule,
    StoreHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    StoreEntityModule,
    StoreAppRoutingModule,
	BrowserAnimationsModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class StoreAppModule {}
