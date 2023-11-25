import { Component, OnInit } from '@angular/core';
import{ FormGroup, 
        FormControl, 
        Validators, 
        FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
              private alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });

   }

  ngOnInit() {
  }
   
 async guardar(){
  var f = this.formularioRegistro.value; 

  if (this.formularioRegistro.invalid){
  const alert = await this.alertController.create({
     header :"incompleto", 
     message: "Datos obligatorios de llenar",
     buttons: ["De acuerdo"]
  });
  await alert.present();
  return;
  }

  var usuario = {
    nombre: f.nombre,
    password: f.password
  };
  
  var usuariostring = JSON.stringify(usuario);
  localStorage.setItem('usuario', usuariostring);
}
}
