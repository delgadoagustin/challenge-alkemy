import { bcrypt_functions } from "../utils/password/bcrypt.util.js";
import { getToken } from "../utils/jwt/jwt.util.js";
import { Dao } from "../daos/Dao.js";

export const authController = {
    register: async(req, res) => {
        try {
            if(!(await Dao.usuarios.getUserByEmail(req.body.email))){
                const usuario = {
                    email: req.body.email,
                    password: await bcrypt_functions.createHash(req.body.password)
                }
                const user = await Dao.usuarios.addOne(usuario);
                if(!user){
                    res.status(200).send({
                        msg: "Problemas al registrar"
                    });
                }
                res.status(200).send({
                    msg: "Usuario Agregado"
                });
            }
            else{
                res.status(400).send("Email en Uso");
            }
        } catch (error) {
            console.log(error)
        }
    },

    login: async (req, res) => {
        try {
            const usuario = await Dao.usuarios.getUserByEmail(req.body.email);
            if (!usuario) {
                return res.status(401).send({
                    msg: "Usuario Inexistente"
                })
            }
            const match = await bcrypt_functions.checkPass(req.body.password,usuario.password);
            if(!match){
                res.status(401).send({
                    msg: "Datos Invalidos"
                })
            }else{
                const token = getToken({usuario});
                res.status(200).send({
                    msg: "Usuario Autorizado",
                    token: token
                })
            }   
        } catch (error) {
            console.log(error)
        }
    },
}