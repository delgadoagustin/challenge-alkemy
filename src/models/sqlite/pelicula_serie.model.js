import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";
import { generoModel } from "./genero.model.js";
import { personajeModel } from "./personaje.model.js";

export const pelicula_serieModel = sequelize.define('pelicula_serie',{
    imagen: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    fecha_creacion: {
        type: DataTypes.DATE
    },
    clasificacion: {
        type: DataTypes.INTEGER
    },
    // personajes: {
    //     type: DataTypes.ARRAY()
    // }
});

pelicula_serieModel.belongsTo(generoModel);
pelicula_serieModel.belongsToMany(personajeModel,{through: "personaje_pelicula"});

await pelicula_serieModel.sync()