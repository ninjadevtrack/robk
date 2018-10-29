import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

export namespace Consts {
    export const PROJECT_NAME: string = 'TECHTON PLANNER';
    export const API_URL: string = environment.apiURL;
    export const AUTH_TOKEN_KEY: string = 'ju_auth_token';
    export const USER_PERMISSIONS: string = 'ju_user_permissions';
}

@Injectable()
export class ConfigService {
    public TECHTON_PLANNER_API = {
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
                return `${Consts.API_URL}/v1/users/${id}`
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
        Project: {
            default: () => {
                return `${Consts.API_URL}/v1/projects`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/projects/${id}`
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/projects/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/projects/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/projects/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/projects/${id}/archive`;
            }
        }
    };

    constructor() {}
}