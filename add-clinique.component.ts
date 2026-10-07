import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Clinique } from '../model/clinique.model';
import { CliniqueService } from '../services/clinique.service';

@Component({
  selector: 'app-add-clinique',
  imports: [FormsModule],
  templateUrl: './add-clinique.component.html'
})
export class AddCliniqueComponent implements OnInit {

  newClinique = new Clinique();

  message!: string;


  constructor(private cliniqueService: CliniqueService){}

  ngOnInit(): void {
    
  }
  addClinique(){
    this.cliniqueService.ajouterClinique(this.newClinique);
    this.message = 'Clinique ' + this.newClinique.nomClinique + ' ajoutée avec succès !';

  }

}
