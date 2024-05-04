import { Document } from "mongoose";
export interface IUser extends Document {
    firstName: string
    middleName: string
    lastName: string
    DOB: string
    documentNumber: string
    phone: string
    email: string
    address: string
    password: string
    isAdmin: string
}