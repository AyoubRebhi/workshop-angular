import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartements/add-apartement/add-apartement.component';
import { ApartmentsByResidenceComponent } from './Apartements/apartements-by-residence/apartements-by-residence.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ✅ Importation des composants standalone
import { ResidencesComponent } from './Residences/residences/residences.component';
import { ApartmentsComponent } from './Apartements/apartements/apartements.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AddApartmentComponent,
    ApartmentsByResidenceComponent,
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  // ✅ Nécessaire pour utiliser FormGroup et FormControl
    NgbModule,
    ResidencesComponent,   // ✅ Ajouter ici les composants standalone
        // ✅ Ajouter ici les composants standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
