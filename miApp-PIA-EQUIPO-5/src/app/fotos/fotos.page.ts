import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {

  constructor(public FotoServiceService:FotoServiceService ) { }

AgregarAGalleria() {
  this.FotoServiceService.AgregarAGalleria();
}

  ngOnInit() {
  }

}
