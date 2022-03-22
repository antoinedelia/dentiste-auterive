import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-beam',
  templateUrl: './beam.component.html',
  styleUrls: ['./beam.component.css']
})
export class BeamComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Cone Beam | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
