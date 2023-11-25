import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class FotoServiceService {
  public fotos: FotosUsuario[] = [];
  constructor() { }
  
  public async AgregarAGalleria() {
    const FotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.fotos.unshift({
      filepath: "soon...",
      webviewPath: FotoCapturada.webPath!
    });
  }

}
export interface FotosUsuario {
  filepath: string;
  webviewPath?: string;
}

