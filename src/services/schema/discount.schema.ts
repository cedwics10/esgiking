import {Schema} from "mongoose";
import {Discount} from "../../models/";

export function getDiscountSchema(): Schema<Discount> {
    return new Schema({
        label: {
            type: Schema.Types.String,
            required: true
        },
        percentage: {
            type: Schema.Types.Number,
            required: true
        },
        startDate: {
            type: Schema.Types.Date,
            required: true
        },
        endDate: {
            type: Schema.Types.Date,
            required: true
        },
        products: [{
            type: Schema.Types.String,
            ref: "Product"
        }],
        restaurantId: {
            type: Schema.Types.String,
            required: true
        }
    }, {
        versionKey: false,
        collection: "discounts"
    });
}