import {Schema} from "mongoose";
import {Restaurant} from "../../models/Restaurant.interface";

export function getRestaurantSchema(): Schema<Restaurant> {
    return new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        address: {
            type: Schema.Types.String,
            required: true
        },
        lat: {
            type: Schema.Types.Number,
            required: true
        },
        long: {
            type: Schema.Types.Number,
            required: true
        },
        isActive: {
            type: Schema.Types.Boolean,
            required: true,
            default: true
        },
        adminId: {
            type: Schema.Types.String,
            default: null
        }
    }, {
        versionKey: false,
        collection: "restaurants"
    });
}