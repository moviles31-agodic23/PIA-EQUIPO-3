import { Component, OnInit } from '@angular/core';
import { GalleryPhoto } from '@capacitor/camera';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage  implements OnInit {
  public fotos: Foto[] = this.foto.fotos;
  constructor(private foto: FotoServiceService) { }
  ngOnInit() {}
  tomarFoto(){this.foto.addNewToGallery()} 
}
