import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

export namespace JUConsts {
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
                return `${JUConsts.API_URL}/v1/user/signin`;
            },
            signUp: () => {
                return `${JUConsts.API_URL}/v1/user/signup`;
            },
            recoverPwd: () => {
                return `${JUConsts.API_URL}/v1/user/recoverpwd`;
            },
            validateToken: () => {
                return `${JUConsts.API_URL}/v1/user/validatetoken`;
            },
            validateRecoveryPwdToken: () => {
                return `${JUConsts.API_URL}/v1/user/validaterecoverpwdtoken`;
            },
            setPassword: () => {
                return `${JUConsts.API_URL}/v1/user/setpwd`;
            }
        },
        User: {
            profile: () => {
                return `${JUConsts.API_URL}/v1/user/profile`;
            },
            dafaultWithId: (id) => {
                return `${JUConsts.API_URL}/v1/users/${id}`
            },
            getAll: () => {
                return `${JUConsts.API_URL}/v1/users`;
            },
            getAllActive: () => {
                return `${JUConsts.API_URL}/v1/users/active`;
            },
            getAllArchived: () => {
                return `${JUConsts.API_URL}/v1/users/archived`;
            }
        },
        MediaPlan: {
            default: () => {
                return `${JUConsts.API_URL}/v1/mediaplans`;
            },
            dafaultWithId: (id) => {
                return `${JUConsts.API_URL}/v1/mediaplans/${id}`
            },
            getAllActive: () => {
                return `${JUConsts.API_URL}/v1/mediaplans/active`;
            },
            getAllArchived: () => {
                return `${JUConsts.API_URL}/v1/mediaplans/archived`;
            },
            activate:  (id) => {
                return `${JUConsts.API_URL}/v1/mediaplans/${id}/activate`;
            },
            archive:  (id) => {
                return `${JUConsts.API_URL}/v1/mediaplans/${id}/archive`;
            },
            getRecords:  (id) => {
                return `${JUConsts.API_URL}/v1/mediaplans/${id}/records`;
            },
            duplicate: (id) => {
                return `${JUConsts.API_URL}/v1/mediaplans/${id}/duplicate`
            }
        },
        MediaPlanRecord: {
            dafault: () => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords`
            },
            dafaultWithId: (id) => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords/${id}`
            },
            duplicate: (id) => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords/${id}/duplicate`
            },
            activate:  (id) => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords/${id}/activate`;
            },
            archive:  (id) => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords/${id}/archive`;
            },
            calculateKPIs:  () => {
                return `${JUConsts.API_URL}/v1/mediaplanrecords/calculatekpis`;
            }
        },
        Campaign: {
            default: () => {
                return `${JUConsts.API_URL}/v1/campaigns`;
            },
            getRecords:  (id) => {
                return `${JUConsts.API_URL}/v1/campaigns/${id}/records`;
            },
            dafaultWithId: (id) => {
                return `${JUConsts.API_URL}/v1/campaigns/${id}`
            },
            duplicate: (id) => {
                return `${JUConsts.API_URL}/v1/campaigns/${id}/duplicate`
            }
        },
        DSP: {
            default: () => {
                return `${JUConsts.API_URL}/v1/dsps`;
            },
            extended: () => {
                return `${JUConsts.API_URL}/v1/dsps/extended`;
            },
            getFormats: (dsp) => {
                return `${JUConsts.API_URL}/v1/dsps/${dsp}/formats`;
            },
            getBuyingModels: (dsp, format) => {
                return `${JUConsts.API_URL}/v1/dsps/${dsp}/formats/${format}/buyingmodels`;
            },
            getTargets: (dsp, format) => {
                return `${JUConsts.API_URL}/v1/dsps/${dsp}/formats/${format}/targets`;
            }
        },
        Goal: {
            default: () => {
                return `${JUConsts.API_URL}/v1/goals`;
            }
        },
        Genders: {
            default: () => {
                return `${JUConsts.API_URL}/v1/genders`;
            }
        },
        Regions: {
            default: () => {
                return `${JUConsts.API_URL}/v1/regions`;
            }
        }
    };

    constructor() {}
}