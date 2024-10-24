export interface User {
    id:string,
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string,
    dateOfBirth:string,
    picture:string,
    phone:string,
    city:string,
    gender:GenderType,
    isVerified:boolean
}

enum GenderType{
    MALE = "male",
    FEMALE = "female"
}