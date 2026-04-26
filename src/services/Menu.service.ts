import { Model, Mongoose } from "mongoose";
import { Menu } from "../models";
import { getMenuSchema } from "./schema";

export type NewMenu = Omit<Menu, "_id">;

export class MenuService {

    readonly model: Model<Menu>;

    constructor(connection: Mongoose) {
        this.model = connection.models['Menu'] || connection.model('Menu', getMenuSchema());
    }

    invalid(entity: NewMenu): boolean {
        if (typeof entity.name !== "string") return true;
        if (typeof entity.price !== "number") return true;
        if (!Array.isArray(entity.products)) return true;
        if (typeof entity.isAvailable !== "boolean") return true;
        if (typeof entity.restaurantId !== "string") return true;

        return false;
    }

    async findAll(): Promise<Menu[]> {
        return this.model.find();
    }

    async findById(id: string): Promise<Menu | null> {
        return this.model.findById(id);
    }

    async create(data: NewMenu): Promise<Menu> {
        return this.model.create(data);
    }

    async update(id: string, data: Partial<NewMenu>): Promise<Menu | null> {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id);
    }
}