import {Schema} from "mongoose";
import {Product} from "../../models/Product.interface";

export function getProductSchema(): Schema<Product> {
    return new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        price: {
            type: Schema.Types.Number,
            required: true
        },
        isAvailable: {
            type: Schema.Types.Boolean,
            required: true,
            default: true
        },
        restaurantId: {
            type: Schema.Types.String,
            required: true
        }
    }, {
        versionKey: false,
        collection: "products"
    });
}