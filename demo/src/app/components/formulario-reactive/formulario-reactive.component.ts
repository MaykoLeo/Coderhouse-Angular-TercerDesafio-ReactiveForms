import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent {
  formularioLogin: FormGroup;

  constructor() {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$'
    /* Creo el json */
    let controles: any = {
      correo: new FormControl('ejemplo@mail.com', [Validators.required, Validators.pattern(regexCorreo)]),
      contrasenia: new FormControl('', [Validators.minLength(6), Validators.required]),
      recordarCredenciales: new FormControl(false),
    }
    this.formularioLogin = new FormGroup(controles)
  }

  login() {
    console.log(this.formularioLogin);
    if (this.formularioLogin.controls['correo'].errors?.['pattern']) {
      console.log('Error en el correo')
    }
    if (this.formularioLogin.controls['correo'].errors?.['required']) {
      console.log('El campo correo es obligatorio')
    }
  }
}
