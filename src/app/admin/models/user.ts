export class User {
}
export class UserDTO{
    public startName: string | undefined;
    public lastName: string | undefined;
    public username: string | undefined;
    public email: string | undefined;
    public token: string | undefined;
}
export class RegisterDTO{
    public constructor(init?: Partial<RegisterDTO>){
        Object.assign(this,init);
    }
    public firstName: string | undefined;
    public lastName: string | undefined;
    public username: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public confirmPassword: string | undefined;
}
