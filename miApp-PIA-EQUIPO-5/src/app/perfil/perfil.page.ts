import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public FotoServiceService:FotoServiceService ) { }
  
  AgregarAGalleria() {
    this.FotoServiceService.AgregarAGalleria();
  }
  
  Editable: boolean = true
  
  ToggleEditar(): void{
    if ( this.Editable === true) {
      this.Editable = false;
    } else {
      this.Editable = true;
    }
  }

  ngOnInit() {
  }

}
