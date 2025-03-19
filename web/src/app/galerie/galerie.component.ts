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
      src: "assets/img/gallery/neige",
      alt: "Neige au cabinet",
      title: "Le cabinet sous la neige"
    },
    {
      src: "assets/img/gallery/arbre",
      alt: "Les deux cyprès du cabinet",
      title: "Les deux cyprès du cabinet"
    },
    {
      src: "assets/img/gallery/entree",
      alt: "L'entrée du cabinet",
      title: "L'accueil du cabinet d'Auterive"
    },
    {
      src: "assets/img/gallery/bureau",
      alt: "Le bureau du Docteur Delia",
      title: "Bureau du Docteur DELIA"
    },
    {
      src: "assets/img/gallery/cabinet-delia",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/gallery/cabinet-delia-2",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/gallery/cabinet-delia-3",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/gallery/salle-soin-delia",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/gallery/cabinet-merieux",
      alt: "Salle de soin du Docteur Merieux",
      title: "Salle de soin du Docteur Merieux"
    },
    {
      src: "assets/img/gallery/salle-sterilisation",
      alt: "Salle de stérilisation",
      title: "Salle de stérilisation"
    },
    {
      src: "assets/img/gallery/equipe",
      alt: "L'équipe du cabinet",
      title: "L'équipe du cabinet"
    },
    {
      src: "assets/img/gallery/delia_masque",
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
