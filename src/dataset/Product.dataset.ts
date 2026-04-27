import { ProductService } from "../services/ProductService";
import { Mongoose } from "mongoose";
import { Product } from "../models/Product.interface";

export async function createProduct(
  connection: Mongoose
) {
  const productService = new ProductService(connection);

    await productService.create({
      name: "Burger",
      price: 10,
      isAvailable: true,
      restaurantId: "???",
    });

    await productService.create({
      name: "Pizza",
      price: 12,
      isAvailable: true,
      restaurantId: "???",
    });

    await productService.create({
      name: "Tacos",
      price: 8,
      isAvailable: true,
      restaurantId: "???",
    });


  console.log("Produits créés.");
}