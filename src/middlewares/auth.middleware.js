import jwt from "jsonwebtoken"
import config from "../../config.js";

export default {

    //VERIFICA EL TOKEN DEL HEADER, SI ESTA HABILITADO LO PASA POR REQ.USER (EN ESTE CASO PASA EL USUARIO COMPLETO!!)
    checkAuthenticatedJWT: (req,res,next)=>{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return res.status(401).send({
                msg: "Usuario No Autorizado"
            });
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, config.JWT_SECRET, (err,decoded)=>{
            if(err){
                return res.status(401).send({
                    msg: "Usuario No Autorizado"
                });
            }
            req.user = decoded;
            next();
        })
    },

    //VERIFICA SI ESTA LOGUEADO
    checkLoggedIn: (req,res,next) => {
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return next();
        }
        else{
            const token = authHeader.split(' ')[1];
            jwt.verify(token, config.JWT_SECRET, (err,decoded)=>{
                if(err){
                    return next()
                }
                else{
                    req.user = decoded.usuario
                    return res.status(200).send({
                        msg: "Ya estas logueado"
                    })
                }
            })
            
        }
    },

}