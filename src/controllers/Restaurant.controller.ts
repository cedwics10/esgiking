import { Request, Response } from "express";
import { RestaurantService } from "../services";

export class RestaurantController {

  constructor(private readonly restaurantService: RestaurantService) {}

  async create(req: Request, res: Response): Promise<void> {
    throw new Error("Not implemented");
  }

  async findAll(req: Request, res: Response): Promise<void> {
    throw new Error("Not implemented");
  }

  async findById(req: Request, res: Response): Promise<void> {
    throw new Error("Not implemented");
  }

  async assignAdmin(req: Request, res: Response): Promise<void> {
    throw new Error("Not implemented");
  }

  async delete(req: Request, res: Response): Promise<void> {
    throw new Error("Not implemented");
  }
}