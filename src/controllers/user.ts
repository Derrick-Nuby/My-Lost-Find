import { Request, Response } from "express";
import { IUser } from "../types/user"
import User from "../models/user";


const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "getAllUsers successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "createUser successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "loginUser successfully working"})
    } catch (error) {
        console.log(error);
    }
}


const getSingleUser = async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).json({ message: "getSingleUser successfully working"})
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