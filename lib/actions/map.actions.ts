"use server"

import { revalidatePath } from "next/cache";
import Map from "../models/map.model"
import { connectToDB } from "../mongoose"
import CountryMap from "../models/map.model";

interface MapParams {
    mapId: string;
    geometryType: string;    
    name: string;
    properties: {
        name: string,
    },
    geometries: {geometryType: string, coordinates: [number, number][]}[]

}


export async function fetchMap(mapId: string): Promise<MapParams | null> {
    try {
      await connectToDB();
      CountryMap.insertMany([{zdfzefz: 'jhgjhgjhg'}])
      return CountryMap.findById<MapParams>(mapId);
      
    } catch (error: any) {
      throw new Error(`Failed to fetch map: ${error.message}`);
    }
}
