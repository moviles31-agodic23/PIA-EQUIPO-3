import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pubfoto',
  templateUrl: './pubfoto.component.html',
  styleUrls: ['./pubfoto.component.scss'],
})
export class PubfotoComponent {
  caption: string = '';

  constructor(public photoService: PhotoService, private router: Router) {
    this.photoService.loadSaved();
  }

  getphotosWebviewPath(): string {
    const photos = this.photoService.getphotos();
    return photos ? photos.webviewPath || '' : '';
  }

  publishPhoto() {
    const userCaption = this.caption;
    this.caption = 'Agregar descripción...';
    this.router.navigate(['/home']);
  }

  cancel() {
    this.caption = 'Agregar descripción...';
    this.router.navigate(['/home']);
  }
}
