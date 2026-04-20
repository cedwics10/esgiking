import {Schema} from "mongoose";
import {Menu} from "../../models";

export function getMenuSchema(): Schema<Menu> {
    return new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        price: {
            type: Schema.Types.Number,
            required: true
        },
        products: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        isAvailable: {
            type: Schema.Types.Boolean,
            required: true,
            default: true
        },
        restaurantId: {
            type: Schema.Types.String,
            ref: "Restaurant",
            required: true
        }
    }, {
        versionKey: false,
        collection: "menus"
    });
}