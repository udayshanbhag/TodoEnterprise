import { KeycloakService, KeycloakConfig } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            const { keycloakConfig } = environment;
            try {
                await keycloak.init({
                    config: keycloakConfig,
                    // initOptions: {
                    //     // onLoad: 'login-required',
                    //     checkLoginIframe: true
                    // },
                    bearerExcludedUrls: []
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
}
