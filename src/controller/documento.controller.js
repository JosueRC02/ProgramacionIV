import documento from "../model/documento";
import tramite from "../model/tramite";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postDocumentos = async (req, res) => {
    try {
        const {codigo_documento, codigo_tramite, nombre_documento} = req.body
        const newDocumento = new documento({codigo_documento,nombre_documento});

        if(codigo_tramite){
            const foundTramite = await tramite.find({codigo_tramite: {$in: codigo_tramite}})
            newDocumento.codigo_tramite = foundTramite.map(tramite => tramite._id)
    }

        const documentoSaved = await newDocumento.save()
        res.status(201).json(new BaseResponse(
            "Documento",
            "Se agregó el documento",
            documentoSaved));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar el documento",
            error.message
        ));
    }
};