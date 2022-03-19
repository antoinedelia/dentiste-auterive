import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle(staticTitle);
  }

  ngOnInit(): void {
  }

}
