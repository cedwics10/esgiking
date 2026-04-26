import { Model, Mongoose } from "mongoose";
import { Restaurant } from "../models";
import { getRestaurantSchema } from "./schema"

export type NewRestaurant = Omit<Restaurant, "_id">;

export class RestaurantService {

  readonly model: Model<Restaurant>;

  constructor(connection: Mongoose) {
    this.model = connection.models['Restaurant'] || connection.model('Restaurant', getRestaurantSchema());
  }

  invalid(entity: any): boolean {
    if (typeof entity.name !== "string") return true;
    if (typeof entity.address !== "string") return true;
    if (typeof entity.lat !== "number") return true;
    if (typeof entity.long !== "number") return true;
    if (typeof entity.isActive !== "boolean") return true;
    if (entity.adminId !== null && typeof entity.adminId !== "string") return true;

    return false;
  }

  async create(data: NewRestaurant): Promise<Restaurant> {
    return this.model.create(data);
  }

  async findAll(): Promise<Restaurant[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<Restaurant | null> {
    return this.model.findById(id);
  }

  async update(id: string, data: Partial<NewRestaurant>): Promise<Restaurant | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}