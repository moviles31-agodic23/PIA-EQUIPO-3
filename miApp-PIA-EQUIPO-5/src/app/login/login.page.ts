import { Component, OnInit } from '@angular/core';
import{ FormGroup, 
        FormControl, 
        Validators, 
        FormBuilder } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required) 
    });
   }

  ngOnInit() {
  }
   async ingresar(){
    var f = this.formularioLogin.value;

    var UsuarioData = localStorage.getItem('usuario');
    if (UsuarioData !== null) {
      var usuario= JSON.parse(UsuarioData);
    } else {
      console.log('No hay datos del usuario');
    }

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('ingresado');
      
    }else{
      const alert = await this.alertController.create({
        header :"Datos incorrectos", 
        message: "El nombre de usuario o la contraseña no coincide",
        buttons: ["De acuerdo"]
     });
     await alert.present();
     return;
    }
   }
  }
