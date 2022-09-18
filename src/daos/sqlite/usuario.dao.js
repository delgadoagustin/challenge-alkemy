import { usuarioModel } from "../../models/sqlite/usuario.model.js";

export class usuarioSQLiteDao{
    constructor(){
        this.repo = usuarioModel;
    }

    async addOne(usuario){
        const nuevo = await this.repo.create(usuario);
        return nuevo;
    }

    async getUserByEmail(email){
        return await this.repo.findOne({
            where: {
                email: email
            }
        })
    }
}