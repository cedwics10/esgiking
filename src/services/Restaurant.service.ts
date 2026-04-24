import { Model, Mongoose } from "mongoose";
import { Restaurant } from "../models";
import { getRestaurantSchema } from "./schema"

export type newRestaurant = Omit<Restaurant, "_id">;

export class RestaurantService {

  readonly model: Model<Restaurant>;

  constructor(connection: Mongoose) {
    this.model = connection.models['Restaurant'] || connection.model('Restaurant', getRestaurantSchema());
  }

  invalid(entity :newRestaurant) : boolean
  {
    return false;
  }

  async create(data: newRestaurant): Promise<Restaurant> {
    return this.model.create(data);
  }

  async findAll(): Promise<Restaurant[]> {
    throw new Error("Not implemented");
  }

  async findById(id: string): Promise<Restaurant | null> {
    throw new Error("Not implemented");
  }

  async assignAdmin(restaurantId: string, adminId: string): Promise<Restaurant | null> {
    throw new Error("Not implemented");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Not implemented");
  }
}