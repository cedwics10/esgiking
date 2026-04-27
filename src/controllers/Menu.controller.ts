import { json, Request, Response, Router } from "express";
import { NewMenu, MenuService } from "../services";
import { Menu } from "../models";

export class MenuController {

  constructor(private readonly menuService: MenuService) { }

  async findAll(req: Request, res: Response): Promise<void> {
    const menus = await this.menuService.findAll();
    res.status(200).json(menus);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id?: string };

    const menu = await this.menuService.findById(id!);

    if (!menu) {
      res.status(404).json({ message: "Menu not found" });
      return;
    }

    res.status(200).json(menu);
  }

  async create(req: Request, res: Response): Promise<void> {
    const newMenu = req.body as NewMenu;

    if (this.menuService.invalid(newMenu)) {
      res.status(400);
      return;
    }

    await this.menuService.create(newMenu);
    res.status(200).json(newMenu);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    if (!id) {
      res.status(400).json({ message: "Missing id" });
      return;
    }

    const updated = await this.menuService.update(id, req.body);

    if (!updated) {
      res.status(404).json({ message: "Menu not found" });
      return;
    }

    res.status(200).json(updated);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    if (!id) {
      res.status(400).json({ message: "Missing id" });
      return;
    }

    await this.menuService.delete(id);
    res.status(200).json({ message: "Menu supprimé" });
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