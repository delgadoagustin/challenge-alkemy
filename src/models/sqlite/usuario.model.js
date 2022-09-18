import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize.config.js";

export const usuarioModel = sequelize.define('usuario',{
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

await usuarioModel.sync();