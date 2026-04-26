import {connect, Mongoose} from "mongoose";
import {getRequiredEnvVar} from "./env.utils";

let mongoConnection: Mongoose | null = null;

export async function openConnection(): Promise<void> {

    if(mongoConnection) {
        return;
    }

    const uri = getRequiredEnvVar("MONGODB_URI");
    const user = getRequiredEnvVar("MONGODB_USER");
    const pass = getRequiredEnvVar("MONGODB_PASSWORD");
    const database = getRequiredEnvVar("MONGODB_DATABASE");

    mongoConnection = await connect(uri, {
        auth: {
            username: user,
            password: pass,
        },
        
        authSource: "admin",
        dbName: database
    });
}

export function getConnection(): Mongoose {
  if (!mongoConnection) throw new Error("MongoDB non connecté");
  return mongoConnection;
}