import casos_abiertos from "../model/casos_abiertos"

export const postCasos_Abiertos = async (req, res) => {
    const {codigo_caso,fecha_apertura_caso,fecha_finalizacion_caso} = req.body
    const newCasos_abiertos = new casos_abiertos({codigo_caso,fecha_apertura_caso,fecha_finalizacion_caso});
    const casos_abiertosSaved = await newCasos_abiertos.save()
    res.status(201).json(casos_abiertosSaved)
};