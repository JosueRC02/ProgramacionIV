import tramite from "../model/tramite"
import Documento from "../model/documento";
import Casos_abiertos from "../model/casos_abiertos";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postTramite = async (req, res) => {
    try {
        const {codigo_tramite,tipo_tramite, documentos_tramite, casos_abiertos_tramite } = req.body
        const newTramite = new tramite({codigo_tramite, tipo_tramite});

        if(documentos_tramite && casos_abiertos_tramite ){
            const foundDocumentos = await Documento.find({codigo_documento: {$in: documentos_tramite}})
            newTramite.documentos_tramite = foundDocumentos.map(documento => documento._id)

            const foundCasos = await Casos_abiertos.find({codigo_caso: {$in: casos_abiertos_tramite}})
            newTramite.casos_abiertos_tramite = foundCasos.map(casos_abiertos => casos_abiertos._id)
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