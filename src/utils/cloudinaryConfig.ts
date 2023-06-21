import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config({path: './../.env'})

export default function cloudinaryConfig(){
    cloudinary.v2.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}