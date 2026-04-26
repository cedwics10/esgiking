import { config } from "dotenv";
config();

import { getConnection, openConnection } from "../utils/mongoose.utils";
import { UserService } from "../services/User.service";
import { createUsers } from "./Users.dataset";
import { createRestaurants } from "./Restaurants.dataset";
import { createMenu } from "./Menu.dataset";

async function createDataset() {
  await openConnection();
  const connection = getConnection();

  const userService = new UserService(connection);
  const isEmpty = await userService.isEmpty();
  if (!isEmpty) {
    console.log("Le dataset a déjà été créé.");
    process.exit(0);
  }

  await createRestaurants(connection);
  await createUsers(connection);
  await createMenu(connection);

  console.log("Dataset généré. ");
  process.exit(0);
}

createDataset().catch(console.error);