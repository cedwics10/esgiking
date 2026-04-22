import {Model, Mongoose} from "mongoose";
import {User} from "../models";
import {getUserSchema} from "./schema";
import {sha256} from "../utils/hash";

// Omit permet de créer un nouveau type en enlevant les champs selectionnés
// Il est possible d'en enelver plusieurs avec un |
export type CreateUser = Omit<User, "_id">;

// Pick permet de selectionner les champs du type que l'on veut conserver
export type Credentials = Pick<User, "username" | "password">;

export class UserService {

    readonly connection: Mongoose;
    readonly userModel: Model<User>;

    constructor(connection: Mongoose) {
        this.connection = connection;
        this.userModel = connection.models['User'] || connection.model('User', getUserSchema());
    }

    async createUser(user: CreateUser): Promise<User> {
        const newUser = {...user};
        newUser.password = user.password;
        return this.userModel.create(newUser);
    }

    async isEmpty(): Promise<boolean> {
        const first = await this.userModel.findOne();
        return first === null;
    }

    findUsingCredentials(credentials: Credentials): Promise<User | null> {
        return this.userModel.findOne({
            username: credentials.username,
            password: sha256(credentials.password)
        });
    }
}