import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto | null = null;
  public savedphotos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'savedphotos';
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos = savedImageFile;
    this.savedphotos.unshift(savedImageFile);

    await Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.savedphotos),
    });
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
  
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
  
    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  }

  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!
      });
  
      return file.data;
    }
    else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
  
      return await this.convertBlobToBase64(blob) as string;
    }
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.savedphotos = (value ? JSON.parse(value) : []) as UserPhoto[];

    if (!this.platform.is('hybrid')) {
      for (let savedphoto of this.savedphotos) {
        const readFile = await Filesystem.readFile({
            path: savedphoto.filepath,
            directory: Directory.Data
        });
        savedphoto.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }

  }

  public getphotos(): UserPhoto | null {
    return this.photos;
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}