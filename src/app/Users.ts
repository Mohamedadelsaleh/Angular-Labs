export class User{
  constructor(
    public userName:string,
    public email:string,
    public password:string,
    public confirmPassword:string,
    public phone:string,
    public selection:string,
  ){}
}