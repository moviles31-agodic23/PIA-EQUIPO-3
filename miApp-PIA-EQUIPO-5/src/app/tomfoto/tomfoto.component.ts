import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tomfoto',
  templateUrl: 'tomfoto.component.html',
  styleUrls: ['tomfoto.component.scss']
})
export class TomFotoComponent {

  constructor(public photoService: PhotoService, private router: Router) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async addPhotoToGallery() {
    try {
      await this.photoService.addNewToGallery();
      this.sendtopubfoto();
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  }



sendtopubfoto() {
  this.router.navigate(['/pubfoto']); 
}
}
