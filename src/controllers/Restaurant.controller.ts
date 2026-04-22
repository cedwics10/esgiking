import { json, Request, Response, Router } from "express";
import { newRestaurant, RestaurantService } from "../services";

import { Restaurant } from "../models";


export class RestaurantController {

  constructor(private readonly restaurantService: RestaurantService) { }

  async create(req: Request, res: Response): Promise<void> {
    const name = req.params.lessonName as string;
    const data = req.body;

    const restaurant = data as newRestaurant;

    await this.restaurantService.create(restaurant);
    res.status(201).end();
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

  buildRouter(): Router {
    const router = Router();
    router.post('/', json(), this.create.bind(this));
    return router;
  }
}