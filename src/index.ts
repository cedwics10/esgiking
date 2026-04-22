import express from 'express';
import {config} from "dotenv";

import { openConnection, getConnection } from './utils/mongoose.utils';

config();

async function main() {
    await openConnection();

    const app = express();

    const mongoConnection = getConnection();

    console.log("MongoDB connecté");

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}`));
}
main().catch(console.error);