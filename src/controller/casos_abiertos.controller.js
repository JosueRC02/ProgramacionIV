import casos_abiertos from "../model/casos_abiertos";
import tramite from "../model/tramite";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postCasos_Abiertos = async (req, res) => {
    try{
        const {codigo_caso, codigo_tramite, fecha_apertura_caso,fecha_finalizacion_caso} = req.body
        const newCasos_abiertos = new casos_abiertos({codigo_caso,fecha_apertura_caso,fecha_finalizacion_caso});

        if(codigo_tramite){
            const foundTramite = await tramite.find({codigo_tramite: {$in: codigo_tramite}})
            newCasos_abiertos.codigo_tramite = foundTramite.map(tramite => tramite._id)
    }
        const casos_abiertosSaved = await newCasos_abiertos.save()
        res.status(201).json(new BaseResponse(
            "Casos abiertos",
            "Se agregó el caso abierto",
            casos_abiertosSaved
        ));
    }catch(error){
        res.status(400).json(new ResponseError(
            "Error al agregar el caso abierto",
            error.message
        ));
    }
};