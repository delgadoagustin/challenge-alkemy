import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";
import { pelicula_serieModel } from "./pelicula_serie.model.js";

export const generoModel = sequelize.define('genero',{
    nombre: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    // peliculas_series: {
    //     type: DataTypes.INTEGER
    // }
});

generoModel.hasMany(pelicula_serieModel);

await generoModel.sync();