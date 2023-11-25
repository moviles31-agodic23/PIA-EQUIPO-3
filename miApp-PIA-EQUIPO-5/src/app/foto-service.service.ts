import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { FotosPageRoutingModule } from './fotos/fotos-routing.module';
import { Foto } from './foto.model';
import { FotosPage } from './fotos/fotos.page';
//funcion para tomar foto  

@Injectable({
  providedIn: 'root'
})

export class FotoServiceService {

  constructor() { }
  public fotos: Foto[] = [];
  
  public async addNewToGallery() {
  const capturedPhoto = await Camera.getPhoto({      
    resultType: CameraResultType.Uri,      
    source: CameraSource.Camera,      quality: 100
    });
    this.fotos.unshift({
      filepath:'',
      webViewPath: foto
    })
  }

  
  
}
