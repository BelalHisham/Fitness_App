const mongoose = require('mongoose'); // Allow us to creat schemas (Mongo db alone is schemaless)

const Schema = mongoose.Schema;

// The structure of the data in the db
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true })

// creat workout model to use it to interact with the workout collection (Workouts) automaticly creat it
module.exports = mongoose.model('Workout', workoutSchema)