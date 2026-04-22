import { RestaurantService } from "../services/Restaurant.service";
import { Mongoose } from "mongoose";
import { Permission } from '../config/permissions';

export async function createRestaurants(connection: Mongoose) {
  const restaurantService = new RestaurantService(connection);

  await restaurantService.create({ name: "ESGI King Chatelet", address: "12 rue de Rivoli", lat: 48.8566, long: 2.3522, isActive: true, role: PERMISSION['MANAGE_REST'] });
  await restaurantService.create({ name: "ESGI King Champs-Elysées", address: "3 place Bellecour", lat: 45.7640, long: 4.8357, isActive: true, role: null });
  await restaurantService.create({ name: "ESGI King Nation", address: "7 rue Canebière", lat: 43.2965, long: 5.3698, isActive: true, role: null });

  console.log("Restaurants créés. ");
}