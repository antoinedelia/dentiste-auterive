import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Le cabinet | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
