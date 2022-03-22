import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-smilers',
  templateUrl: './smilers.component.html',
  styleUrls: ['./smilers.component.css']
})
export class SmilersComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Gouttières | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
