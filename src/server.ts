import mongoose from "mongoose";
import express from "express";
import app from "./app"
import dotenv from "dotenv"

dotenv.config({})

function handleDbError(){
    console.error("No database link provided!");
    process.exit(1);
}

const db: string = process.env.DB_URL!;

if(!db){
    handleDbError()
}

mongoose.connect(db).then(() =>{
    console.log("Connected")
});