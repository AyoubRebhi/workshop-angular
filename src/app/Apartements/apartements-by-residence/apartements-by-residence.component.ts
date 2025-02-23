import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { Residence } from 'src/app/models/residence';
import { ApartmentsService } from 'src/app/services/apartements.service';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartements-by-residence.component.html',
  styleUrls: ['./apartements-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit{
  
  constructor(private apartmentService: ApartmentsService, private route: ActivatedRoute) { }


  apartments! : Apartment[];
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      console.log(id);
      this.apartments = this.apartmentService.getApartmentsByID(id -1 );

    });

    console.log(this.apartments);
    console.log(this.apartmentService.getApartments());

  }

}