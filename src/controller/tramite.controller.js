import tramite from "../model/tramite"

export const postTramite = async (req, res) => {
    const {tipo_tramite, documento_tramite, codigo_departamento_tramite} = req.body
    const newTramite = new tramite({tipo_tramite, documento_tramite, codigo_departamento_tramite});
    const tramiteSaved = await newTramite.save()
    res.status(201).json(tramiteSaved)
};