import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  photos = [
    {
      src: "assets/img/neige.JPG",
      alt: "Neige au cabinet",
      title: "Le cabinet sous la neige"
    },
    {
      src: "assets/img/arbre.JPG",
      alt: "Arbres devant le cabinet",
      title: "Arbres devant le cabinet"
    },
    {
      src: "assets/img/entree.jpg",
      alt: "L'entrée du cabinet",
      title: "L'accueil du cabinet d'Auterive"
    },
    {
      src: "assets/img/bureau.jpg",
      alt: "Le bureau du Docteur Delia",
      title: "Bureau du Docteur DELIA"
    },
    {
      src: "assets/img/cabinet3.jpeg",
      alt: "Salle de soin du Docteur Delia",
      title: "Salle de soin du Docteur Delia"
    },
    {
      src: "assets/img/cabinet4.jpeg",
      alt: "Salle de soin du Docteur Sperte",
      title: "Salle de soin du Docteur Sperte"
    },
    {
      src: "assets/img/equipe.jpg",
      alt: "L'équipe du cabinet",
      title: "L'équipe du cabinet"
    },
    {
      src: "assets/img/delia_masque.jpg",
      alt: "Nous sommes équipés pour vous recevoir !",
      title: "Nous sommes équipés pour vous recevoir !"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
