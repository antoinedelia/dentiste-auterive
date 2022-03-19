import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-charte',
  templateUrl: './charte.component.html',
  styleUrls: ['./charte.component.css']
})
export class CharteComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Charte qualité | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
