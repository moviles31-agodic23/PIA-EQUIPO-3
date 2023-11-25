import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  public fotos: Foto[] = this.foto.fotos;
  constructor(private foto: FotoServiceService) { }
  ngOnInit() {}
  tomarFoto(){this.foto.addNewToGallery()} 
}

