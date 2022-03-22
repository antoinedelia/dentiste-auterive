import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';

@Component({
  selector: 'app-blanchiment',
  templateUrl: './blanchiment.component.html',
  styleUrls: ['./blanchiment.component.css']
})
export class BlanchimentComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle("Blanchiment | " + staticTitle);
  }

  ngOnInit(): void {
  }

}
