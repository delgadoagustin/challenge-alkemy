import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";

export const generoModel = sequelize.define('genero',{
    nombre: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    peliculas_series: {
        type: DataTypes.INTEGER
    }
});

await generoModel.sync();