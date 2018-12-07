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
        Enrollment: {
            default: () => {
                return `${Consts.API_URL}/v1/enrollments`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/enrollments/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/enrollments/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/enrollments/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/enrollments/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/enrollments/${id}/archive`;
            }
        },
        Service: {
            default: () => {
                return `${Consts.API_URL}/v1/services`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/services/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/services/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/services/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/services/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/services/${id}/archive`;
            }
        },
        Instrument: {
            default: () => {
                return `${Consts.API_URL}/v1/instruments`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/instruments/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/instruments/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/instruments/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/instruments/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/instruments/${id}/archive`;
            }
        }
    };

    constructor() {}
}
