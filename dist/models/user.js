import { model, Schema } from "mongoose";
const userSchema = new Schema({
    fistName: {
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
    phoneNumber: {
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
export default model("User", userSchema);
//# sourceMappingURL=user.js.map