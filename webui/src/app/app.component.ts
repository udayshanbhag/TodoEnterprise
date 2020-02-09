import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AppAuthGuard } from './AppAuthGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webui';

 
  constructor(private keycloakService: KeycloakService, private adminGuard: AppAuthGuard) {
  }
  
  logout() {
    console.log("logging out now");
    this.keycloakService.logout();
  }
}
