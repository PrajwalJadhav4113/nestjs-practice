import { IsInt, IsString } from "class-validator";

export class CreateCustomerDto{
    @IsString()          //import from classvalidator
    name:string;
    @IsInt()
    age:number;
}    //here we define rule how data look