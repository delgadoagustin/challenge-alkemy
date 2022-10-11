import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";

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

