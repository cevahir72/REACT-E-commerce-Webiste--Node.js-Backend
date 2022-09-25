const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId: {type: String ,  required: true },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity:{
                    type: Number,
                    default:1,
                },
            }
        ],
        amount: {type: Number , required: true},
        address:{type: Object , required: true},
        //STRIPE payment method will returns us an Object
        status: {type: String , required: "pending"},
        
    },
    {timestamps: true}
)

modeule.exports = mongoose.model("Order", OrderSchema);