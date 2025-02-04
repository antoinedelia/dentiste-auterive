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
      gender: "m",
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
        "Attestation aux gestes d'urgence niveau 2 en 2023",
        "Formation Endo-club Coltène en 2023",
      ],
    },
    {
      name: "Pierre Mérieux",
      img: "pierre",
      gender: "m",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
        "Attestation aux gestes d'urgence niveau 2",
        "Formation Endo-club Coltène en 2023",
        "Formation implantologie orale Tissu Level TBR en 2023",
        "Formation validante cone beam et radioprotection",
        "Formation endodontie efficace learnylib en 2022",
      ],
    },
    {
      name: "Paul Aragon",
      img: "aragon",
      gender: "m",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
      ],
    },
    {
      name: "Nicolas Régis",
      gender: "m",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
      ],
    },
    {
      name: "Pierre Delia",
      gender: "m",
      descriptions: [
        "Docteur en chirurgie dentaire",
        "Diplomé de la faculté de Toulouse",
      ],
      doctolib_url: "https://www.doctolib.fr/interne-en-chirurgie-dentaire/auterive/pierre-delia"
    },
    {
      name: "Laura",
      img: "laura",
      gender: "f",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2016",
        "Diplomée de l'ESAD Toulouse",
      ],
    },
    {
      name: "Alizée",
      img: "alizee",
      gender: "f",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2023",
        "Diplomée de l'ESAD Toulouse",
      ],
    },
    {
      name: "Lou",
      img: "lou",
      gender: "f",
      descriptions: [
        "Assistante dentaire qualifiée depuis 2015",
        "Diplomée de l'école AGORA Toulouse",
      ],
    },
    {
      name: "Tiffany",
      gender: "f",
      img: "tiffany",
      descriptions: [
        "Assistante dentaire en formation",
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
