import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Apartements/apartements/apartements.component';
import { ApartmentsByResidenceComponent } from './Apartements/apartements-by-residence/apartements-by-residence.component';
import { AddApartmentComponent } from './Apartements/add-apartement/add-apartement.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'residences',  
    component: ResidencesComponent,
    
  },
  {
    path: 'apartments',  
    component: ApartmentsComponent,
    
  },
  {path: 'apartments/:id', component: ApartmentsByResidenceComponent},
  {path: 'residences/:id', component: ResidenceDetailsComponent},
  {path: 'add-residence', component: AddResidenceComponent},
  {path: 'addResidence', component: AddResidenceComponent},
  {path: 'add-apartment', component: AddApartmentComponent},
  {path: 'updateResidence/:id', component: AddResidenceComponent},
  {path: '**', component: NotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }