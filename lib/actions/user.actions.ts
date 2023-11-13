"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { connectToDB } from "../mongoose"


export async function fetchUser(userId: string): Promise<Params> {
    try {
      await connectToDB();
      return {} as Params
      
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

interface Params {
    userId: string;
    username: string;
    name: string;
    email: string;
    bio: string;
    path: string;
    onboarded: boolean;

}

export async function updateUser({
    userId,
    username,
    name,
    email,
    bio,
    path,
}: Params
    ): Promise<void>{
    connectToDB();
    await User.findOneAndUpdate(
        { id: userId },
        { 
            username: username.toLowerCase(),
            name,
            bio,
            email,
            onboarded: true,
        },
        { upsert: true }
    );

    try {
        if(path === '/profile/edit'){
            revalidatePath(path);
        }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }

}