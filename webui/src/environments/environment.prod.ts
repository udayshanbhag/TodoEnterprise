import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8088/auth',
  realm: 'shanbhag',
  clientId: 'todoapp',
  "credentials": {
    "secret": "a2b56951-38f9-4488-bf5b-b2785d1c78f7"
  }
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
