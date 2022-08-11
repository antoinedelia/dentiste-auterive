import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VariableService } from '../variables.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private variableService: VariableService, private title: Title, private toastr: ToastrService) {
    const staticTitle = this.variableService.getTitle();
    this.title.setTitle(staticTitle);
    this.showSuccess();
  }

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.warning("Le cabinet est actuellement fermé et reprendra ses rendez-vous le lundi 22 août. Merci de votre compréhension.", "Congés Août", {
      closeButton: true,
      disableTimeOut: true,
      positionClass: "toast-bottom-right"
    });
  }

}
