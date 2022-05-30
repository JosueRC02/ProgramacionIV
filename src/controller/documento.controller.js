import documento from "../model/documento";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postDocumentos = async (req, res) => {
    try {
        const {codigo_documento,nombre_documento} = req.body
        const newDocumento = new documento({codigo_documento,nombre_documento});
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