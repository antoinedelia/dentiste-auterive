import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeadbandComponent } from './headband/headband.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ImplantsComponent } from './implants/implants.component';
import { SmilersComponent } from './smilers/smilers.component';
import { BlanchimentComponent } from './blanchiment/blanchiment.component';
import { CharteComponent } from './charte/charte.component';
import { FichesComponent } from './fiches/fiches.component';
import { BeamComponent } from './beam/beam.component';
import { PlanComponent } from './plan/plan.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatDividerModule } from '@angular/material/divider'; 

import { HttpClientModule } from '@angular/common/http';
import { VariableService } from './variables.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadbandComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    EquipeComponent,
    ImplantsComponent,
    SmilersComponent,
    BlanchimentComponent,
    CharteComponent,
    FichesComponent,
    BeamComponent,
    PlanComponent,
    GalerieComponent,
    MentionsLegalesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatDividerModule,
    SwiperModule
  ],
  providers: [VariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
