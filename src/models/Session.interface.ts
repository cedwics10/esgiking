import {User} from "./User.interface";

export interface Session {
    _id: string;
    user: string | User;
    expirationDate?: Date;
}