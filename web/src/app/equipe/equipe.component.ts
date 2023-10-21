import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  members = [
    {
      name: "Christophe Delia",
      img: "delia",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
        "Diplôme d'État de manipulateur d'électroradiologie médicale",
        "Diplôme universitaire d'odontologie légale et expertise",
        "Pratique l'implantologie depuis 2004",
        "Certificat de formation à l'orthodontie invisible par gouttières transparentes SMILERS® - Toulouse 2018",
        "Certificat de formation à l'utilisation et à l'optimisation du ConeBeam en imagerie médicale - Toulouse 2018",
        "Certificat de prothèses sur implant Dentsply - Toulouse 2008",
        "Certificat anesthésie sans douleur Quicksleeper - Toulouse 2006",
        "Certificat de suivi de l'enseignement magistral et pratique en biomatériaux et implantologie - Angers 2006",
      ],
    },
    {
      name: "Pierre Mérieux",
      img: "pierre",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
      ],
    },
    {
      name: "Paul Aragon",
      img: "aragon",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
      ],
    },
    {
      name: "Marion Sperte",
      img: "sperte",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomée de la faculté de Toulouse",
        "Certificat de formation à l'orthodontie invisible par gouttières transparentes SMILERS® - Toulouse 2017",
        "Le Dr Sperte a quitté notre cabinet en septembre 2023",
      ],
    },
    {
      name: "Laura",
      img: "laura",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2016",
        "Diplomée de l'ESAD Toulouse",
      ],
    },
    {
      name: "Alizée",
      img: "alizee",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2023",
        "Diplomée de l'ESAD Toulouse",
      ],
    },
    {
      name: "Mégane",
      img: "megane",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2018",
        "Diplomée de l'école AGORA Toulouse",
        "Responsable accueil, suivi des patients et comptabilité",
      ],
    },
  ]

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("L'équipe | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
