"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model"
import { connectToDB } from "../mongoose"

interface Params {
    userId: string;
    username: string;
    name: string;
    email: string;
    bio: string;
    path: string;
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