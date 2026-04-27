import { Model, Mongoose } from "mongoose";
import { Product } from "../models";
import { getProductSchema } from "./schema";

import { ValidationUtils } from "../utils";

export type NewProduct = Omit<Product, "_id">;

export class ProductService {

  readonly model: Model<Product>;

  constructor(connection: Mongoose) {
    this.model = connection.models['Product'] || connection.model('Product', getProductSchema());
  }

  invalid(entity: NewProduct): boolean {
    if (ValidationUtils.isNonValidString(entity.name)) return true;
    if (ValidationUtils.isInvalidPrice(entity.price)) return true;
    if (typeof entity.isAvailable != 'boolean') return true;
    if (typeof entity.restaurantId !== "string") return true; // to do

    return false;
  }

  async findAll(): Promise<Product[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<Product | null> {
    return this.model.findById(id);
  }

  async create(data: NewProduct): Promise<Product> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<NewProduct>): Promise<Product | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}