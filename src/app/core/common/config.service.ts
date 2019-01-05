import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

export namespace Consts {
    export const PROJECT_NAME: string = 'TECHTON PLANNER';
    export const API_URL: string = environment.apiURL;
    export const AUTH_TOKEN_KEY: string = 'ju_auth_token';
    export const USER_PERMISSIONS: string = 'ju_user_permissions';
    export const USER_ROLES: string = 'ju_user_roles';
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
            },
            getStudents:  (id) => {
                return `${Consts.API_URL}/v1/clients/${id}/students`;
            },
            hasStudentAccount:  (id) => {
                return `${Consts.API_URL}/v1/clients/${id}/hasstudentaccount`;
            },
            createStudentAccount:  (id) => {
                return `${Consts.API_URL}/v1/clients/${id}/createstudentaccount`;
            },
        },
        Teacher: {
            default: () => {
                return `${Consts.API_URL}/v1/teachers`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/teachers/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/teachers/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/teachers/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/teachers/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/teachers/${id}/archive`;
            }
        },
        Student: {
            default: () => {
                return `${Consts.API_URL}/v1/students`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/students/${id}`;
            },
            getAllActive: () => {
                return `${Consts.API_URL}/v1/students/active`;
            },
            getAllArchived: () => {
                return `${Consts.API_URL}/v1/students/archived`;
            },
            activate:  (id) => {
                return `${Consts.API_URL}/v1/students/${id}/activate`;
            },
            archive:  (id) => {
                return `${Consts.API_URL}/v1/students/${id}/archive`;
            }
        },
        IndividualLesson: {
            default: () => {
                return `${Consts.API_URL}/v1/individual-lessons`;
            },
            search: () => {
                return `${Consts.API_URL}/v1/individual-lessons/search`;
            },
            dafaultWithId: (id) => {
                return `${Consts.API_URL}/v1/individual-lessons/${id}`;
            }
        }
    };

    constructor() {}
}
