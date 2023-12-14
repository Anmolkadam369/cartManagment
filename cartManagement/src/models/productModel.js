const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim:true
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        }, 

        currencyId: {
            type: String,
            required: true,
            default: "INR"
        },

        currencyFormat: {
            type: String,
            required: true
        }, 

        isFreeShipping: {
            type: Boolean,
            default: false
        },

        productImage: {
            type: String,
            required: true
        }, 

        style: {
            type: String
        },

        availableSizes: {
            type: [String],
            enum: ["S", "XS", "M", "X", "L", "XXL", "XL"],
        }, 

        installments: {
            type: Number
        },

        deletedAt: {
            type: Date
        },

        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model('product', productSchema)