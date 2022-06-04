import tramite from "../model/tramite"
import departamento from "../model/departamento";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postTramite = async (req, res) => {
    try {
        const {codigo_tramite, codigo_departamento, tipo_tramite } = req.body
        const newTramite = new tramite({codigo_tramite, tipo_tramite});

        if(codigo_departamento){
            const foundDepartamento = await departamento.find({nombre_departamento: {$in: codigo_departamento}})
            newTramite.codigo_departamento = foundDepartamento.map(departamento => departamento._id)
    }
        const tramiteSaved = await newTramite.save()
        res.status(201).json(new BaseResponse(
            "Tramites",
            "Se agregó el tramite",
            tramiteSaved));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar el tramite",
            error.message
        ));
    }
};