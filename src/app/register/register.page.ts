import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  validation_message = {
    email: [
      { type: "required", message: "¡El Email es obligatorio!" },
      { type: "pattern", message: "¡Debe escribir un Email valido!" },
      { type: "maxlength", message: "¡El máximo numero de caracteres permitidos es 24!" }
    ],
    password: [
      { type: "minlength", message: "¡El minimo numero de caracteres permitidos es 6!" },
      { type: "required", message: "¡La contraseña es obligatoria!" }
    ],
    name: [
      { type: "required", message: "¡El nombre es obligatorio!" }
    ],
    last_name: [
      { type: "required", message: "¡La apellido es obligatorio!" }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$"),
              Validators.maxLength(24)
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin (){
    this.navCtrl.navigateForward("/login");
  }

  registerUser (userData: any){
    console.log(userData);
    this.authService.registerUser(userData).then(() =>{
      this.navCtrl.navigateBack("/login");
    })
  }

}
