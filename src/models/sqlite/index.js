import { pelicula_serieModel } from "./pelicula_serie.model.js";
import { generoModel } from "./genero.model.js";
import { personajeModel } from "./personaje.model.js";

generoModel.hasMany(pelicula_serieModel);

pelicula_serieModel.belongsTo(generoModel);
pelicula_serieModel.belongsToMany(personajeModel,{through: "personaje_pelicula"});

personajeModel.belongsToMany(pelicula_serieModel,{through: "personaje_pelicula"});

await personajeModel.sync()
await generoModel.sync();
await pelicula_serieModel.sync()