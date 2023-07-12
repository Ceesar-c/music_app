import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VistadosGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router){}

  async canActivate() {
    const isIntroShowed = await this.storage.get('introShow');
    console.log(isIntroShowed);
    if(isIntroShowed){
      return true;
    }else{
      this.router.navigateByUrl("/vistados");
      return false;
    }
  }
  
}
