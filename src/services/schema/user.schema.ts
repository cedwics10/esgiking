import {Schema} from "mongoose";
import {User, UserRole} from "../../models";

export function getUserSchema(): Schema<User> {
    return new Schema({
        username: {
            type: Schema.Types.String,
            required: true,
            unique: true
        },
        password: {
            type: Schema.Types.String,
            required: true,
            select: false
        },
        role: {
            type: Schema.Types.String,
            enum: Object.values(UserRole),
            required: true,
            default: UserRole.CUSTOMER
        }
    }, {
        versionKey: false,
        collection: "users"
    });
}