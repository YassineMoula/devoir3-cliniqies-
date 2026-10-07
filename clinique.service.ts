import { Injectable } from '@angular/core';
import { Clinique } from '../model/clinique.model';

@Injectable({
  providedIn: 'root'
})
export class CliniqueService {
  cliniques: Clinique[];

  constructor() {
    this.cliniques = [
      {
        idClinique: 1,
        nomClinique: 'Clinique du Parc',
        adresse: '12 rue des Lilas, Lyon',
        telephone: '04 72 00 00 01',
        dateCreation: new Date('01/14/2011')
      },
      {
        idClinique: 2,
        nomClinique: 'Centre Medical Saint-Pierre',
        adresse: '8 avenue Victor Hugo, Paris',
        telephone: '01 42 00 00 02',
        dateCreation: new Date('12/17/2010')
      },
      {
        idClinique: 3,
        nomClinique: 'Clinique des Oliviers',
        adresse: '25 boulevard des Oliviers, Marseille',
        telephone: '04 91 00 00 03',
        dateCreation: new Date('02/20/2020')
      }
    ];
  }

  listeCliniques(): Clinique[] {
    return this.cliniques;
  }

  ajouterClinique(clinique: Clinique) {
    this.cliniques.push(clinique);
  }

  supprimerClinique(clinique: Clinique) {
    const index = this.cliniques.indexOf(clinique, 0);
    if (index > -1) {
      this.cliniques.splice(index, 1);
    }
  }

  consulterClinique(id: number): Clinique {
    return this.cliniques.find(clinique => clinique.idClinique == id)!;
  }

  modifierClinique(clinique: Clinique) {
    const index = this.cliniques.findIndex(current => current.idClinique === clinique.idClinique);
    if (index > -1) {
      this.cliniques.splice(index, 1, clinique);
    }
  }
}
