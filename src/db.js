import pg from "pg";
import dotenv from "dotenv";
const { Client } = pg;

const environment = process.env.NODE_ENV;

const envFile = environment === "production" ? ".env" : ".env.local";

dotenv.config({
  path: envFile,
});

export const db = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});
