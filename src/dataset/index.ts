import { config } from "dotenv";
config();

import { Restaurant } from "../models";

import { getConnection, openConnection } from "../utils/mongoose.utils";
import { UserService } from "../services/User.service";
import { createUsers } from "./Users.dataset";
import { createRestaurants } from "./Restaurants.dataset";
import { createMenu } from "./Menu.dataset";
import { createProduct } from "./Product.dataset";

async function createDataset() {
  await openConnection();
  const connection = getConnection();

  const userService = new UserService(connection);
  const isEmpty = await userService.isEmpty();

  if (!isEmpty) {
    await connection.connection.dropDatabase();
    console.log('0 : base de donnée réinitialisée');
  }

  /* Launching all datasets */

  let restaurants : Restaurant[]  = await createRestaurants(connection);
  
  await createUsers(connection);
  await createMenu(connection);
  await createProduct(connection);

  console.log("Dataset généré. ");
  process.exit(0);
}

createDataset().catch(console.error);