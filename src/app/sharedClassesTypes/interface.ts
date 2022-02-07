export interface IProduct{
 id:Number,
 name:string,
 quantity:Number,
 price:Number,
 image:string
}

export interface ICategory{
    id:Number,
    name:string
}

export interface IUser{
    name:string,
    username:string,
    email:string
}

export interface IPost{
    id:Number,
    title:string,
    body:string
}
