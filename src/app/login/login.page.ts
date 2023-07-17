import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: "required", message: "¡El Email es obligatorio!" },
      { type: "pattern", message: "¡Debe escribir un Email valido!" },
      { type: "maxlength", message: "¡El máximo numero de caracteres permitidos es 24!" }
    ],
    password: [
      //3. Agregar los mensajes en la vista para los errores de password
      //{ type: "maxlength", message: "¡El máximo numero de caracteres permitidos es 12!" },
      { type: "minlength", message: "¡Se requiere 6 caracteres como minimo!" },
      { type: "required", message: "¡La contraseña es obligatoria!" }
    ]
  }

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private storage: Storage) {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              //Punto 2. Agregar 2 validators mas en email o password uno en cada uno.
              Validators.maxLength(24),
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              //Punto 2. Agregar 2 validators mas en email o password uno en cada uno.
              //Primer validator (1) maxLenght
              //Validators.maxLength(12),
              //Segundo validator (2) minLenght
              Validators.minLength(6)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  loginUser (credentials: any){
    console.log(credentials);
    //Conectando con los servicios de autenticacion
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err =>{
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
  }

  goToRegister (){
    this.navCtrl.navigateForward("/register");
  }

}
