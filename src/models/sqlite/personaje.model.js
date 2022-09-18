import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";

export const personajeModel = sequelize.define('personaje',{
    imagen: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING(100)
    },
    edad: {
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.INTEGER
    },
    historia: {
        type: DataTypes.TEXT
    },
    pelicula_serie: {
        type: DataTypes.STRING
    },
})

await personajeModel.sync()