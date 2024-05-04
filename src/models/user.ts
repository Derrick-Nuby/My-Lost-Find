import { IUser } from "./../types/user"
import { model, Schema } from "mongoose"
import bcrypt from "bcryptjs"


const userSchema: Schema = new Schema (
    {
        firstName: {
            type: String,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        DOB: {
            type: String,
        },
        documentNumber: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        password: {
            type: String,
        },
        isAdmin: {
            type: String,
        },
    }
)

userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

export default model<IUser>("User", userSchema);