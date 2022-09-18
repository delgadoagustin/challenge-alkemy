import express from "express"
import { Dao } from "../daos/Dao.js"

export const personajeController = {
    listCharacters: async(req,res) => {
        try {
            const personajes = await Dao.personajes.list();
            res.status(200).send(personajes);
        } catch (error) {
            console.log(error)
        }
    },
    addCharacter: async(req, res) => {
        try {
            const personaje = {
                imagen: req.body.imagen,
                nombre: req.body.nombre,
                peso: req.body.peso,
                edad: req.body.edad,
                historia: req.body.historia,
                pelicula_serie: req.body.pelicula_serie,
            }
            Dao.personajes.addOne(personaje);
            res.status(200).send("Personaje Agregado")
        } catch (error) {
            console.log(error)
        }
    }
}