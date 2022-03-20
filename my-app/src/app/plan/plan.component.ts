import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

const ELEMENT_DATA = [
  {jour: 'Lundi', matin: "9h-12h", apres_midi: "14h-18h30"},
  {jour: 'Mardi', matin: "9h-12h", apres_midi: "14h-18h30"},
  {jour: 'Mercredi', matin: "9h-12h", apres_midi: "14h-18h30"},
  {jour: 'Jeudi', matin: "9h-12h", apres_midi: "14h-18h30"},
  {jour: 'Vendredi', matin: "9h-12h", apres_midi: "14h-18h30"},
  {jour: 'Samedi', matin: "Fermé", apres_midi: "Fermé"},
  {jour: 'Dimanche', matin: "Fermé", apres_midi: "Fermé"},
];

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  displayedColumns: string[] = ['jour', 'matin', 'apres_midi'];
  dataSource = ELEMENT_DATA;

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Contact | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
