import { json, Request, Response, Router } from "express";
import { ProductService, NewProduct } from "../services";

export class ProductController {

  constructor(private readonly productService: ProductService) { }

  async findAll(req: Request, res: Response): Promise<void> {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id?: string };

    const product = await this.productService.findById(id!);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  }

  async create(req: Request, res: Response): Promise<void> {
    const newProduct = req.body as NewProduct;

    
    if (this.productService.invalid(newProduct)) {
      res.status(400).json({ message: "Invalid product" });
      return;
    }

    const created = await this.productService.create(newProduct);
    res.status(200).json(created);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    if (!id) {
      res.status(400).json({ message: "Missing id" });
      return;
    }

    const updated = await this.productService.update(id, req.body);

    if (!updated) {
      res.status(404).json({ message: "Product not found" });
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

    await this.productService.delete(id);
    res.status(200).json({ message: "Product supprimé" });
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