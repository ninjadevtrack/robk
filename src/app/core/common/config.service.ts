import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { GetStreamSettings } from "./models/get-stream-settings.model";

export namespace Consts {
    export const API_URL: string = environment.apiURL;
    export const AUTH_TOKEN_KEY: string = "ju_auth_token";
    export const USER_PERMISSIONS: string = "ju_user_permissions";
    export const USER_ROLES: string = "ju_user_roles";
    export const USER_PROFILE: string = "ju_user_profile";
    export const GET_STREAM_TOKEN: string = "get_stream_token";
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
            default: () => {
                return `${Consts.API_URL}/v1/users`;
            },
            dafaultWithId: id => {
                return `${Consts.API_URL}/v1/users/${id}`;
            },
            profile: () => {
                return `${Consts.API_URL}/v1/user/profile`;
            },
            getAllAvailableRoles: () => {
                return `${Consts.API_URL}/v1/user/getallavailableroles`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/users/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/users/archived`;
            },
            activate: id => {
                return `${Consts.API_URL}/v1/users/${id}/activate`;
            },
            archive: id => {
                return `${Consts.API_URL}/v1/users/${id}/archive`;
            }
        },
        Client: {
            default: () => {
                return `${Consts.API_URL}/v1/clients`;
            },
            dafaultWithId: id => {
                return `${Consts.API_URL}/v1/clients/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/clients/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/clients/archived`;
            },
            activate: id => {
                return `${Consts.API_URL}/v1/clients/${id}/activate`;
            },
            archive: id => {
                return `${Consts.API_URL}/v1/clients/${id}/archive`;
            }
        },
        Company: {
            default: () => {
                return `${Consts.API_URL}/v1/companies`;
            },
            ignore: id => {
                return `${Consts.API_URL}/v1/companies/${id}/ignore`;
            }
        }
    };

    public getGetStreamSettings(): GetStreamSettings {
        return environment.getStream;
    }

    constructor() {}
}
