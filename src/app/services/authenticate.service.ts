import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials:any){
    return new Promise((accept, reject) => {
      if (credentials.email == "hola@hola.com" && credentials.password == "123456"){
        accept("Login exitoso")
      } else {
        reject("Verifique sus credenciales")
      }
    })
  }

  registerUser(userData: any){
    //Encriptar password
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
