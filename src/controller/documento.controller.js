import documento from "../model/documento";

export const postDocumentos = async (req, res) => {
    const {codigo_documento,nombre_documento} = req.body
    const newDocumento = new documento({codigo_documento,nombre_documento});
    const documentoSaved = await newDocumento.save()
    res.status(201).json(documentoSaved)
};