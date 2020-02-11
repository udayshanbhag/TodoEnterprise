import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'shanbhag',
  clientId: 'todoapp'};

export const environment = {
  production: true,
  keycloakConfig
};
