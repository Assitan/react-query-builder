// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const citiesSchema = new Schema(
    {
        field: {
            type: String
        }
    }
);

// We export the schema to use it anywhere else
export default mongoose.model('cities', citiesSchema);
