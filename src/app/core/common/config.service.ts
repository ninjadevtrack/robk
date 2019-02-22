import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

export namespace Consts {
    export const PROJECT_NAME: string = 'TECHTON PLANNER';
    export const API_URL: string = environment.apiURL;
    export const AUTH_TOKEN_KEY: string = 'ju_auth_token';
    export const USER_PERMISSIONS: string = 'ju_user_permissions';
    export const USER_ROLES: string = 'ju_user_roles';
    export const USER_PROFILE: string = 'ju_user_profile';
}

@Injectable()
export class ConfigService {
    public API = {
        Auth: {
            signIn: () => {
                return `${Consts.API_URL}/v1/user/signin`;
            },
            signUp: () => {
                return `${Consts.API_URL}/v1/user/signup`;
            },
            recoverPwd: () => {
                return `${Consts.API_URL}/v1/user/recoverpwd`;
            },
            validateToken: () => {
                return `${Consts.API_URL}/v1/user/validatetoken`;
            },
            validateRecoveryPwdToken: () => {
                return `${Consts.API_URL}/v1/user/validaterecoverpwdtoken`;
            },
            setPassword: () => {
                return `${Consts.API_URL}/v1/user/setpwd`;
            }
        },
        User: {
            profile: () => {
                return `${Consts.API_URL}/v1/user/profile`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/users/${id}`;
            },
            getAll: () => {
                return `${Consts.API_URL}/v1/users`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/users/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/users/archived`;
            }
        },
        Client: {
            default: () => {
                return `${Consts.API_URL}/v1/clients`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/clients/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/clients/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/clients/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/clients/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/clients/${id}/archive`;
            }
        },
    };

    constructor() {}
}
