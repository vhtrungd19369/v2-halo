import * as mongoose from 'mongoose'

export const ImpDetailSchema = new mongoose.Schema({
    quantity: Number,
    unit: String,
    import: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Import',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },

});
