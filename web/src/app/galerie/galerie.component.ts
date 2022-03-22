import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {
  
  photos = [
    {
      src: "assets/img/gallery/neige.jpg",
      alt: "Neige au cabinet",
      title: "Le cabinet sous la neige"
    },
    {
      src: "assets/img/gallery/arbre.jpg",
      alt: "Arbres devant le cabinet",
      title: "Arbres devant le cabinet"
    },
    {
      src: "assets/img/gallery/entree.jpg",
      alt: "L'entrée du cabinet",
      title: "L'accueil du cabinet d'Auterive"
    },
    {
      src: "assets/img/gallery/bureau.jpg",
      alt: "Le bureau du Docteur Delia",
      title: "Bureau du Docteur DELIA"
    },
    {
      src: "assets/img/gallery/cabinet-delia.jpg",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/gallery/cabinet-sperte.jpg",
      alt: "Salle de soin du Docteur Sperte",
      title: "Salle de soin du Docteur Sperte"
    },
    {
      src: "assets/img/gallery/equipe.jpg",
      alt: "L'équipe du cabinet",
      title: "L'équipe du cabinet"
    },
    {
      src: "assets/img/gallery/delia_masque.jpg",
      alt: "Nous sommes équipés pour vous recevoir !",
      title: "Nous sommes équipés pour vous recevoir !"
    },
  ]

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Galerie | " + staticTitle);
  }

  ngOnInit(): void {
    
    
  }

}
