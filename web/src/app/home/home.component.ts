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

    this.showToast();
  }

  ngOnInit(): void {
  }

  showToast() {
    this.toastr.warning(`Le cabinet sera fermé du lundi 8 juillet au vendredi 26 juillet pour la fin des travaux. Réouverture le lundi 29 juillet.
    <br>
    <br>
    Merci de votre compréhension.
    <br>
    <br>
    L'équipe soignante.`, "Fermeture exceptionnelle", {
      closeButton: true,
      disableTimeOut: true,
      positionClass: "toast-bottom-right",
      toastClass: "custom-toast-width ngx-toastr",
      enableHtml: true
    });
  }

}
