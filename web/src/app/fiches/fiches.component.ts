import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  panelOpenState = false;
  test: any;
  infos = [
    {
      title: 'Informations Pratiques',
      fiches: [
        {
          title: 'Soins dentaires',
          file: this.get_content('Informations Pratiques', 'Soins dentaires', 'assets/text/soins-dentaires.html'),
          content: ""
        },
        {
          title: 'Honoraires et remboursements',
          file: this.get_content('Informations Pratiques', 'Honoraires et remboursements', 'assets/text/honoraires-et-remboursements.html'),
        }
      ]
    },
    {
      title: 'Dents chez l\'adulte',
      fiches: [
        {
          title: 'Plaque dentaire',
          file: this.get_content('Dents chez l\'adulte', 'Plaque dentaire', 'assets/text/plaque-dentaire.html'),
        },
        {
          title: 'Detartrage',
          file: this.get_content('Dents chez l\'adulte', 'Detartrage', 'assets/text/detartrage.html'),
        },
        {
          title: 'Hypersensibilité',
          file: this.get_content('Dents chez l\'adulte', 'Hypersensibilité', 'assets/text/hypersensibilite.html'),
        },
        {
          title: 'Conserver une haleine fraîche',
          file: this.get_content('Dents chez l\'adulte', 'Conserver une haleine fraîche', 'assets/text/conserver-une-haleine-fraiche.html'),
        },
      ]
    },
    {
      title: 'Dents de l\'enfance à l\'adolescence',
      fiches: [
        {
          title: "Première visite",
          file: this.get_content('Dents de l\'enfance à l\'adolescence', 'Première visite', 'assets/text/premiere-visite.html'),
        },
        {
          title: "Pourquoi soigner les dents de lait",
          file: this.get_content('Dents de l\'enfance à l\'adolescence', 'Pourquoi soigner les dents de lait', 'assets/text/pourquoi-soigner-les-dents-de-lait.html'),
        },
        {
          title: "Les caries du jeune enfants",
          file: this.get_content('Dents de l\'enfance à l\'adolescence', 'Les caries du jeune enfants', 'assets/text/les-caries-du-jeune-enfants.html'),
        },
        {
          title: "Éviter les caries grâce au scellement des sillons",
          file: this.get_content('Dents de l\'enfance à l\'adolescence', 'Éviter les caries grâce au scellement des sillons', 'assets/text/eviter-les-caries-grace-au-scellement-des-sillons.html'),
        },
        {
          title: "Dents cassées",
          file: this.get_content('Dents de l\'enfance à l\'adolescence', 'Dents cassées', 'assets/text/dents-cassees.html'),
        },
      ]
    },
    {
      title: 'Les pathologies',
      fiches: [
        {
          title: "Caries",
          file: this.get_content('Les pathologies', 'Caries', 'assets/text/caries.html'),
        },
        {
          title: "La dévitalisation",
          file: this.get_content('Les pathologies', 'La dévitalisation', 'assets/text/la-devitalisation.html'),
        },
        {
          title: "Les aphtes",
          file: this.get_content('Les pathologies', 'Les aphtes', 'assets/text/les-aphtes.html'),
        },
        {
          title: "Les abcès",
          file: this.get_content('Les pathologies', 'Les abcès', 'assets/text/les-abces.html'),
        },
        {
          title: "Le bruxisme",
          file: this.get_content('Les pathologies', 'Le bruxisme', 'assets/text/le-bruxisme.html'),
        },
        {
          title: "L'examen radiologique panoramique",
          file: this.get_content('Les pathologies', "L'examen radiologique panoramique", "assets/text/l-examen-radiologique-panoramique.html"),
        },
      ]
    },
    {
      title: 'Les gencives',
      fiches: [
        {
          title: "Les gingivites",
          file: this.get_content('Les gencives', 'Les gingivites', 'assets/text/les-gingivites.html'),
        },
        {
          title: "Le traitement des parodontites",
          file: this.get_content('Les gencives', 'Le traitement des parodontites', 'assets/text/le-traitement-des-parodontites.html'),
        },
        {
          title: "Le surfaçage",
          file: this.get_content('Les gencives', 'Le surfaçage', 'assets/text/le-surfacage.html'),
        },
      ]
    },
    {
      title: 'Les prothèses',
      fiches: [
        {
          title: "Les différents types de prothèses dentaires",
          file: this.get_content('Les prothèses', 'Les différents types de prothèses dentaires', 'assets/text/les-differents-types-de-protheses-dentaires.html'),
        },
        {
          title: "Les inlays et les onlays",
          file: this.get_content('Les prothèses', 'Les inlays et les onlays', 'assets/text/les-inlays-et-les-onlays.html'),
        },
        {
          title: "Prothèses amovibles partielles",
          file: this.get_content('Les prothèses', 'Prothèses amovibles partielles', 'assets/text/protheses-amovibles-partielles.html'),
        },
        {
          title: "Les bridges et ponts dentaires",
          file: this.get_content('Les prothèses', 'Les bridges et ponts dentaires', 'assets/text/les-bridges-et-ponts-dentaires.html'),
        },
        {
          title: "Les prothèses amovibles complètes",
          file: this.get_content('Les prothèses', 'Les prothèses amovibles complètes', 'assets/text/les-protheses-amovibles-completes.html'),
        },
        {
          title: "Les inlay-cores",
          file: this.get_content('Les prothèses', 'Les inlay-cores', 'assets/text/les-inlay-cores.html'),
        },
      ]
    },
    {
      title: 'Les implants',
      fiches: [
        {
          title: "Qu'est-ce qu'un implant dentaire ?",
          file: this.get_content('Les implants', "Qu'est-ce qu'un implant dentaire ?", 'assets/text/qu-est-ce-qu-un-implant-dentaire.html'),
        },
        {
          title: "Pose d'implants dentaires",
          file: this.get_content('Les implants', "Pose d'implants dentaires", 'assets/text/pose-d-implants-dentaires.html'),
        },
        {
          title: "L'analyse pré-implantaire",
          file: this.get_content('Les implants', "L'analyse pré-implantaire", 'assets/text/l-analyse-pre-implantaire.html'),
        },
        {
          title: "Douleur et implants dentaires",
          file: this.get_content('Les implants', "Douleur et implants dentaires", 'assets/text/douleur-et-implants-dentaires.html'),
        },
        {
          title: "La maintenance implantaire",
          file: this.get_content('Les implants', "La maintenance implantaire", 'assets/text/la-maintenance-implantaire.html'),
        },
        {
          title: "Votre passeport implantaire",
          file: this.get_content('Les implants', "Votre passeport implantaire", 'assets/text/votre-passeport-implantaire.html'),
        },
      ]
    },
    {
      title: 'Les choix esthétiques',
      fiches: [
        {
          title: "Le blanchiment",
          file: this.get_content('Les choix esthétiques', "Le blanchiment", 'assets/text/le-blanchiment.html'),
        },
        {
          title: "Les colorations dentaires",
          file: this.get_content('Les choix esthétiques', "Les colorations dentaires", 'assets/text/les-colorations-dentaires.html'),
        },
      ]
    },
    {
      title: 'Prendre soin de ses dents',
      fiches: [
        {
          title: "Les 10 règles d'or d'une bonne hygiène dentaire",
          file: this.get_content('Prendre soin de ses dents', "Les 10 règles d'or d'une bonne hygiène dentaire", 'assets/text/les-10-regles-d-or-d-une-bonne-hygiene-dentaire.html'),
        },
        {
          title: "Brosse à dents manuelle ou brosse à dents électrique ?",
          file: this.get_content('Prendre soin de ses dents', "Brosse à dents manuelle ou brosse à dents électrique ?", 'assets/text/brosse-a-dents-manuelle-ou-brosse-a-dents-electrique.html'),
        },
      ]
    },
    {
      title: 'Quiz',
      fiches: [
        {
          title: "Vrai ou faux ?",
          file: this.get_content('Quiz', "Vrai ou faux ?", 'assets/text/vrai-ou-faux.html'),
        }
      ]
    }
  ]
  constructor(private http: HttpClient, private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Fiches pratiques | " + staticTitle);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }

  get_content(upper_title:string, title: string, file: string) {
    return this.http.get(file, { responseType: 'blob', observe: 'response' }).subscribe((value: HttpResponse<Blob>) => {
      const data = new Blob([value.body as Blob], {type: value.body?.type});
      const reader = new FileReader();
      reader.readAsText(data);
      
      return reader.onload = (content) => {
        const textInFile = reader.result as string;
        const info = this.infos.find(info => info.title === upper_title);
        const fiche = info?.fiches.find(fiche => fiche.title === title);
        if (fiche) {
          fiche.content = textInFile;
        }
        return textInFile;
      };
    });
  }
}
