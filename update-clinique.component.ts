import { Component, OnInit } from '@angular/core';
import { CliniqueService } from '../services/clinique.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinique } from '../model/clinique.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-clinique',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-clinique.component.html',
  styles: ``
})
export class UpdateCliniqueComponent implements OnInit {
  currentClinique = new Clinique();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private cliniqueService: CliniqueService) {


  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentClinique = this.cliniqueService.consulterClinique(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentClinique);


  }

  updateClinique()
  {
    this.cliniqueService.modifierClinique(this.currentClinique);
    this.router.navigate(['cliniques']);
  }

}
