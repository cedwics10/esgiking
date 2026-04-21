import express from 'express';
import {config} from "dotenv";

config();

async function main() {
    const connection = await Database();

    const app = express();

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}`));
}
main().catch(console.error);