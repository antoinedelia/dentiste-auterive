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
    this.toastr.info(`Chers patients, toute l'équipe vous souhaite une très belle nouvelle année 2024 !
    <br>
    <br>
    A cette occasion, des travaux importants vont débuter pour agrandir et améliorer nos locaux. Le parking sera inutilisable quelques mois, et l'entrée sera déviée sur le côté du bâtiment."
    <br>
    <br>
    Les WC peuvent aussi être condamnés quelques temps.
    <br>
    Le parking de l'école Michelet est bien sûr disponible.
    <br>
    <br>
    Merci de votre compréhension.
    <br>
    <br>
    L'équipe soignante.`, "Travaux", {
      closeButton: true,
      disableTimeOut: true,
      positionClass: "toast-bottom-right",
      toastClass: "custom-toast-width ngx-toastr",
      enableHtml: true
    });
  }

}
