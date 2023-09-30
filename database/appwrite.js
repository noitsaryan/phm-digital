import { Client, Databases } from "appwrite";
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID);

export const database = new Databases(client);
