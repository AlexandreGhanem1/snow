import mongoose from "mongoose";


const mapSchema = new mongoose.Schema({
    id: {
        type: String,
        
    },
    geometryType: {
        type: String,
        
    },
    properties: {
        name: {
            type: String,
            
        },
        type: Object,
        
    },
    geometries: {
        type: [
            {
                geometryType: {
                    type: String,
                    
                },
                coordinates: {
                    type: [
                        {
                            type: [
                                {
                                    type: Number,
                                }
                            ]
                        }
                    ],
                    
                },
            }
        ],  
    },
});

const CountryMap = mongoose.models.Map || mongoose.model("Map", mapSchema);


export default CountryMap;