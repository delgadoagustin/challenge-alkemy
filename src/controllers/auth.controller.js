

export const usuarioController = {
    register: async(req, res) => {
        try {
            if(!(await Dao.usuarios.existEmail(req.body.email))){
                const usuario = {
                    nombre: req.body.nombre,
                    telefono: req.body.telefono,
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
            
        }
    },

    login: async (req, res) => {
        try {
            const usuario = await Dao.usuarios.getByEmail(req.body.email);
            if (!usuario) {
                res.status(401).send({
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
            
        }
    },
}