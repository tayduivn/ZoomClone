import { Language } from "./tbllanguage";

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
    public languageID: number[] = [];
    public phoneNumber!: string;
    public roleName!: string;
}
export class UserViewModel{
    firstName: string | undefined;
    lastName: string | undefined;
    id: string | undefined;
    userName: string | undefined;
    email: string | undefined;
    phoneNumber: string | undefined;
    languages: Language[] = [];
}
export class UserChangeViewModel{
    id!: string;
    newPassword!: string;
}
export class UserRegistrationModel{
    public firstName: string | undefined;
    public lastName: string | undefined;
    public username: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public confirmPassword: string | undefined;
}