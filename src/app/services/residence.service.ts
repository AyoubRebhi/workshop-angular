import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

    listResidences: Residence[]=[
      {id:1,locationShown: false,name: "El fel",address:"Borj Cedria", image:"assets/images/R1.jpg", status: "Disponible"},
       {id:2,locationShown: false,name: "El yasmine", address:"Ezzahra",image:"assets/images/R2.jpg", status: "Disponible" },
       {id:3,locationShown: false,name: "El Arij", address:"Rades",image:"assets/images/R3.jpg", status: "Vendu"},
       {id:4,locationShown: false,name: "El Anber",address:"inconnu", image:"../../assets/images/R4.jpg", status: "En Construction"}
     ];
     private residencesSubject: BehaviorSubject<Residence[]> = new BehaviorSubject<Residence[]>(this.listResidences);

     getResidences(): Observable<Residence[]> {
      return of(this.listResidences);
    }

    addResidence(residence: Residence): void {
      this.listResidences.push(residence);
      this.residencesSubject.next(this.listResidences); // Update the BehaviorSubject to notify subscribers
    
    }

    updateResidence(residence: Residence): void {
      const index = this.listResidences.findIndex(r => r.id === residence.id);
      if (index !== -1) {
        this.listResidences[index] = residence;
      }
    }

  constructor() { }
}
