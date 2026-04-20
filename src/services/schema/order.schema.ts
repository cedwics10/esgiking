import {Schema} from "mongoose";
import {Order, OrderStatus, OrderType} from "../../models/Order.inteface";

export function getOrderSchema(): Schema<Order> {
    return new Schema({
        customerId: {
            type: Schema.Types.String,
            required: true
        },
        restaurantId: {
            type: Schema.Types.String,
            required: true
        },
        items: [{
            type: Schema.Types.String,
            ref: "Product"
        }],
        status: {
            type: Schema.Types.String,
            enum: Object.values(OrderStatus),
            required: true,
            default: OrderStatus.PENDING
        },
        type: {
            type: Schema.Types.String,
            enum: Object.values(OrderType),
            required: true
        },
        total: {
            type: Schema.Types.Number,
            required: true
        },
        deliveryAddress: {
            type: Schema.Types.String,
            default: null
        }
    }, {
        versionKey: false,
        collection: "orders",
        timestamps: true
    });
}