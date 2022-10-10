import { personajeModel } from "../../models/sqlite/personaje.model.js";


export class personajeSQLiteDao {
    constructor(){
        this.repo = personajeModel;
    }

    async list(){
        return await this.repo.findAll({
            attributes: ["imagen","nombre"]
        })
    }

    async addOne(personaje){
        const nuevo = await this.repo.create(personaje);
        console.log(nuevo);
        return nuevo;
    }

    async updateOne(id, personaje){
        await this.repo.update(personaje,{
            where: {
                _id: id
            }
        })
        
    }
}