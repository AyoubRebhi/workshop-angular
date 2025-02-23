import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApartmentsService } from 'src/app/services/apartements.service';
import { ResidenceService } from 'src/app/services/residence.service';
import { Apartment } from 'src/app/models/apartment';
import { Router } from '@angular/router';  // ✅ Import Router


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartement.component.html',
  styleUrls: ['./add-apartement.component.css']
})
export class AddApartmentComponent implements OnInit {

  constructor (private ApartmentsService : ApartmentsService, private residenceService : ResidenceService,    private router: Router  // ✅ Inject Router
  ) {}
  resListe = this.residenceService.getResidences();

  appartement_data! : FormGroup;




  apart: Apartment = new Apartment(); 
  listeResidence: any = this.residenceService.getResidences();


  ngOnInit(): void {
    this.appartement_data = new FormGroup({
      'surface': new FormControl(null, [Validators.required]),
      'terrace': new FormControl(false, [Validators.required]),
      'surfaceterrace': new FormControl({ value: 0, disabled: true }, [Validators.required]),
      'category': new FormControl('S+1', [Validators.required]),
      'ResidenceId': new FormControl(null, [Validators.required]),
      'apartNum': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'floorNum': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')])
    });

        this.appartement_data.get('terrace')?.valueChanges.subscribe(value => {
          if (value) {
            this.appartement_data.get('surfaceterrace')?.enable();
          } else {
            this.appartement_data.get('surfaceterrace')?.disable();
            this.appartement_data.get('surfaceterrace')?.reset();
          }
        });
        // Fetch residences
        this.residenceService.getResidences().subscribe(residences => {
        this.listeResidence = residences;
    });
      }
  
      onFormSubmit() {
        if (this.appartement_data.valid) {
          console.log("Submitting form:", this.appartement_data.value);
    
          this.ApartmentsService.addApartment(this.appartement_data.value);
          this.router.navigate(['/apartments']); 
        } else {
          console.error("Form is invalid:", this.appartement_data.errors);
          console.error("Form data:", this.appartement_data.value);

        }
      }

      onReset(){
        this.appartement_data.reset();
      }
}
