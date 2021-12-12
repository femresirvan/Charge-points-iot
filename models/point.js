const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    locationx: {
        type: Number,
    },
    locationy: {
        type: Number
    },
    type: Number,
    name: String,
    city: String,
    slots: [{
        slotName: {
            type: String
        },
        isFull: {
            type: Boolean,
            // default: false
        }
    }]
});

//To make 2 fields unique together
pointSchema.index({ locationx: 1, locationy: 1 }, { unique: true })

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;