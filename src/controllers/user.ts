import { Request, Response } from "express";
import { IUser } from "../types/user"
import User from "../models/user.js";
import user from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JWT_SECRET



const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {

        const users: IUser[] = await User.find();

        if ( users.length === 0 ) {

            res.status(200).json({ message: "There are currently no users", users })
            return;
        }


        res.status(200).json({ message: "Below are all the users", users })

    } catch (error) {
        console.log(error);
    }
}


const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        
        const { email, documentNumber, ...otherFields} = req.body;

        const existingEmail = await User.findOne({ email })
        const existingDocumentNumber = await User.findOne({ documentNumber })

        if (existingEmail || existingDocumentNumber) {
            return res.status(400).json({ error: "User with that email or document number already exists. Please login  or reset your password if this is you."})
        }



        const user: IUser = new User({
            email,
            documentNumber,
            ...otherFields
        })

        const newUser: IUser = await user.save()
        
        res.status(201).json({ message: "User created successfully ", user: newUser})
    } catch (error) {
        console.log(error);
    }
}


const loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
        
        const { email, phone, password } = req.body;

        let user: IUser | null = null;

        if (phone) {
            user = await User.findOne({ phone });
        } else if (email) {
            user = await User.findOne({ email });
        }
        

        if (!user) {
        return res.status(404).json({ error: "User not found" });
        }


        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
        }

        const { id, firstName, email: userEmail, isAdmin } = user;
        
        const token = jwt.sign({ id, username: firstName, email: userEmail, isAdmin }, 'jwtSecret')

        const expiryDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

        res.cookie(
            'jwt',
            token,
            {httpOnly: true, path: '/', expires: expiryDate},
            
        ),
        
        res.status(200).json({ message: "User logged in successfully", user: { id, firstName, email, isAdmin }, token },);

    } catch (error) {
        console.log(error);
    }
}


const getSingleUser = async (req: Request, res: Response): Promise<any> => {
    try {
        
        const userId = req.params.id;

        const singleUser = await
        
    } catch (error) {
        console.log(error);
    }
}


const updateUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "updateUser successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const logoutUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "logoutUser successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "deleteUser successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const resetPassword = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "resetPassword successfully working"})
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllUsers,
    createUser,
    loginUser,
    getSingleUser,
    updateUser,
    logoutUser,
    deleteUser,
    resetPassword,
}