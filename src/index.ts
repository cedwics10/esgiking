import express from 'express';
import {config} from "dotenv";

import { openConnection, getConnection } from './utils/mongoose.utils';

import { RestaurantService, MenuService, ProductService } from './services/';
import { RestaurantController, MenuController, ProductController } from './controllers/';
import { mongo } from 'mongoose';

config();

async function main() {
    await openConnection();
    const mongoConnection = getConnection();

    console.log("1. MongoDB connecté !");

    const app = express();

    /* Service */
    const serviceMenu = new MenuService(mongoConnection);
    const serviceProduct = new ProductService(mongoConnection);

    const serviceResto = new RestaurantService(mongoConnection);

    /* Controllers */
    const controllerRMenu = new MenuController(serviceMenu);
    const controllerProduct = new ProductController(serviceProduct);

    const controllerResto = new RestaurantController(serviceResto);

    /* Routes */
    app.use("/product", controllerProduct.buildRouter());
    app.use("/menu", controllerRMenu.buildRouter());
    app.use("/resto", controllerResto.buildRouter());

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`2. Application lancée sur le port ${port}`));
}
main().catch(console.error);