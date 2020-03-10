export class SetPasswordModel {
    constructor(
        public recoverPwdToken: string,
        public password: string
    ) { }
}
