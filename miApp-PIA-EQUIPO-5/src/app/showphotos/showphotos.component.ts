import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-showphotos',
  templateUrl: './showphotos.component.html',
  styleUrls: ['./showphotos.component.scss'],
})
export class ShowphotosComponent  implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
