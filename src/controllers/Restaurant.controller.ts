import { json, Request, Response, Router } from "express";
import { NewRestaurant, RestaurantService } from "../services";

import { Restaurant } from "../models";

export class RestaurantController {

  constructor(private readonly restaurantService: RestaurantService) { }

  async findAll(req: Request, res: Response): Promise<void> {
    const restaurants = await this.restaurantService.findAll();

    res.status(200).json(restaurants);
  }

  async findById(req: Request, res: Response): Promise<void> {

    if (req.params.id === undefined) {
      res.status(404);
    }

    const { id } = req.params as { id?: string };

    const restaurant = await this.restaurantService.findById(id!);

    if (!restaurant) {
      res.status(404);
    }

    res.status(200).json(restaurant);
  }

  async create(req: Request, res: Response): Promise<void> {
    const data = req.body;
    const newRestaurant = data as NewRestaurant;

    if (this.restaurantService.invalid(newRestaurant)) {
      res.status(400).json(newRestaurant);
      return;
    }

    await this.restaurantService.create(newRestaurant);

    res.status(200).json(newRestaurant);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    if (id == undefined) {
      res.status(401);
      return;
    }

    const updated = await this.restaurantService.update(id, req.body);

    if (!updated) {
      res.status(404);
      return;
    }

    res.status(200).json(updated);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    if (id == undefined) {
      res.status(400);
      return;
    }

    await this.restaurantService.delete(id);

    res.status(200);
  }

  buildRouter(): Router {
    const router = Router();

    router.get('/', json(), this.findAll.bind(this));
    router.get('/:id', json(), this.findById.bind(this));

    router.post('/', json(), this.create.bind(this));

    router.put('/:id', json(), this.update.bind(this));

    router.delete('/:id', json(), this.delete.bind(this));

    return router;
  }
}