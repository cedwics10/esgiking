import { MenuService } from "../services/Menu.service";
import { Mongoose } from "mongoose";

export async function createMenu(connection: Mongoose) {
  const menuService = new MenuService(connection);

  await menuService.create({ name: "Menu Whooper", price: 9.99, products: [], isAvailable: true, restaurantId: "restaurantId1" });
  await menuService.create({ name: "Menu Veggie", price: 8.49, products: [], isAvailable: true, restaurantId: "restaurantId2" });
  await menuService.create({ name: "Menu Steahkhouse", price: 12.99, products: [], isAvailable: false, restaurantId: "restaurantId3" });

  console.log("Menus créés.");
}