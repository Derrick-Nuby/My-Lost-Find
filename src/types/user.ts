import { Document } from "mongoose";
export interface IUser extends Document {
    fistName: string
    middleName: string
    lastName: string
    DOB: string
    documentNumber: string
    phoneNumber: string
    email: string
    address: string
    password: string
    isAdmin: string
}