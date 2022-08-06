//import { Role } from "./Role";
import { Role } from "./role.enum";

export class RegisterUser{
    id: string="";
    name:string="";
    email:string="";
    username:string="";
    password: string="";
    accessToken: string="";
    roles: string[]=[];
    tokenType: string="";
}