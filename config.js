import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

config({path: __dirname+"/.env"});



export default {
    //SETUP
    HOST: process.env.HOST || "127.0.0.1",
    PORT: process.env.PORT || 8080,
    //DATABASE
    SQLITE: process.env.SQLITE || ":memory:",
    JWT_SECRET: process.env.JWT_SECRET || "secreto"
}