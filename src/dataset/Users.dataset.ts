import { UserService } from "../services/User.service";
import { UserRole } from "../models";
import { Mongoose } from "mongoose";

export async function createUsers(connection: Mongoose) {
    const userService = new UserService(connection);

    await userService.createUser({ username: "bigboss", password: "bigboss123", role: UserRole.BIGBOSS });
    await userService.createUser({ username: "admin_paris", password: "admin123", role: UserRole.ADMIN });
    await userService.createUser({ username: "preparateur_1", password: "prep123", role: UserRole.PREPARATEUR });
    await userService.createUser({ username: "livreur_1", password: "livr123", role: UserRole.LIVREUR });

    console.log("Utilisateurs créés. ");
}