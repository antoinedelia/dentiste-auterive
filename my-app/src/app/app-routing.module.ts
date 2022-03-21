import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BeamComponent } from './beam/beam.component';
import { BlanchimentComponent } from './blanchiment/blanchiment.component';
import { CharteComponent } from './charte/charte.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FichesComponent } from './fiches/fiches.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ImplantsComponent } from './implants/implants.component';
import { PlanComponent } from './plan/plan.component';
import { SmilersComponent } from './smilers/smilers.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'beam', component: BeamComponent },
  { path: 'blanchiment', component: BlanchimentComponent },
  { path: 'charte', component: CharteComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'fiches', component: FichesComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'implants', component: ImplantsComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'smilers', component: SmilersComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
