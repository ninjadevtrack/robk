export interface ISignInResult {
    token: string;
    expires: number;
    roles: string[];
    getStreamToken: string;
}

export class SignInModel {
    constructor(public email: string, public password: string) {}
}
