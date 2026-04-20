import {Schema} from "mongoose";
import {Session} from "../../models";

export function getSessionSchema(): Schema<Session> {
    return new Schema({
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        expirationDate: {
            type: Schema.Types.Date,
            required: false,
        }
    }, {
        versionKey: false,
        collection: "sessions",
    });
}