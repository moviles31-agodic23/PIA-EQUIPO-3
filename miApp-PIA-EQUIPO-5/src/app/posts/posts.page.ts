import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})

export class PostsPage implements OnInit {

    constructor(public FotoServiceService:FotoServiceService ) { }
  
  AgregarAGalleria() {
    this.FotoServiceService.AgregarAGalleria();
  }

  Cambiar: string = "heart-outline"
  CambiarC: string = ""
  CambiarColor(): void{
    if ( this.Cambiar === 'heart') {
      this.Cambiar = 'heart-outline';
      this.CambiarC = '';
    } else {
      this.Cambiar = 'heart';
      this.CambiarC = 'danger';
    }
  } 
  ngOnInit() {
  }

}
