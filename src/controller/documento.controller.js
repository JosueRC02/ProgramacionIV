import documento from "../model/documento";
import tramite from "../model/tramite";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postDocumentos = async (req, res) => {
    try {
        const {link_documento} = req.body
        const newDocumento = new documento({link_documento});

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