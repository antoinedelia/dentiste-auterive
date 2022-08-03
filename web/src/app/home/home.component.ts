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
    this.toastr.warning("Le cabinet sera fermé du jeudi 11 août au lundi 22 août inclus. Merci de votre compréhension.", "Congés Août", {
      closeButton: true,
      disableTimeOut: true,
      positionClass: "toast-bottom-right"
    });
  }

}
