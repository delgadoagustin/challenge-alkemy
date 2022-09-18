import config from "../../config.js"
import { personajeSQLiteDao } from "./sqlite/personaje.dao.js";
import { usuarioSQLiteDao } from "./sqlite/usuario.dao.js";

//SQLITE

let type = "sqlite"; //Utilizado para gestionar daos

let Dao
switch (type) {
    
    case "sqlite":
        try {
            Dao = {
                usuarios: new usuarioSQLiteDao(),
                personajes: new personajeSQLiteDao()
            };
            
        } catch (error) {
            console.log(error)
        }
}

export { Dao };