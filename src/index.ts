import express from 'express';
import {config} from "dotenv";

import { openConnection, getConnection } from './utils/mongoose.utils';

import { RestaurantService, MenuService } from './services/';
import { RestaurantController, MenuController } from './controllers/';

config();

async function main() {
    await openConnection();
    const mongoConnection = getConnection();

    console.log("1. MongoDB connecté !");

    const app = express();

    const serviceResto = new RestaurantService(mongoConnection);
    const controllerResto = new RestaurantController(serviceResto);

    const serviceMenu = new MenuService(mongoConnection);
    const controllerRMenu = new MenuController(serviceMenu);

    app.use("/resto", controllerResto.buildRouter());
    app.use("/menu", controllerRMenu.buildRouter());

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`2. Application lancée sur le port ${port}`));
}
main().catch(console.error);