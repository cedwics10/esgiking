import { openConnection } from "./config/permissions";
import { UserService } from "./services/User.service";
import { RestaurantService } from "./services/Restaurant.service";
import { UserRole } from "./models";

async function createDataset() {
  const connection = await openConnection();

  const userService = new UserService(connection);
  const restaurantService = new RestaurantService(connection);

  const isEmpty = await userService.isEmpty();
  if (!isEmpty) {
    console.log("Données déjà en base de données");
    process.exit(0);
  }

  const restaurant = await restaurantService.create({
    name: "FastFood Paris",
    address: "1 rue de la Paix",
    lat: 48.8566,
    long: 2.3522,
    isActive: true,
    adminId: null
  });

  await userService.createUser({
    username: "bigboss",
    password: "bigboss123",
    role: UserRole.BIGBOSS
  });

  await userService.createUser({
    username: "admin_paris",
    password: "admin123",
    role: UserRole.ADMIN
  });

  await userService.createUser({
    username: "preparateur_1",
    password: "prep123",
    role: UserRole.PREPARATEUR
  });

  await userService.createUser({
    username: "livreur_1",
    password: "livr123",
    role: UserRole.LIVREUR
  });

  console.log("Seed terminé ✅");
  process.exit(0);
}

createDataset();