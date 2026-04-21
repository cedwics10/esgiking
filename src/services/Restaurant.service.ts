import { Model, Mongoose } from "mongoose";
import { Restaurant } from "../models";
import { getRestaurantSchema } from "./schema"

export type CreateRestaurant = Omit<Restaurant, "_id">;

export class RestaurantService {

  readonly restaurantModel: Model<Restaurant>;

  constructor(connection: Mongoose) {
    this.restaurantModel = connection.model("Restaurant", getRestaurantSchema());
  }

  async create(data: CreateRestaurant): Promise<Restaurant> {
    throw new Error("Not implemented");
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