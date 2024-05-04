import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema({
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
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});
export default model("User", userSchema);
//# sourceMappingURL=user.js.map