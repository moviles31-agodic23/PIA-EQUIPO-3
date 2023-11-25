export class PhotoService {
    public fotos: Foto[] = [];
  
  }
export interface Foto {
    filepath: string; 
    webViewPath?: string;
    Cambiar : string;
    CambiarC: string;
}
