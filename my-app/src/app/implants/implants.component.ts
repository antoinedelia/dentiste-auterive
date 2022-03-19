import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-implants',
  templateUrl: './implants.component.html',
  styleUrls: ['./implants.component.css']
})
export class ImplantsComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Implants | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
