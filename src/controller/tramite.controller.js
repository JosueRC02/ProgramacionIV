import tramite from "../model/tramite"
import Documento from "../model/documento";
import Casos_abiertos from "../model/casos_abiertos";

export const postTramite = async (req, res) => {
    const {codigo_tramite,tipo_tramite, documentos_tramite, casos_abiertos_tramite } = req.body
    const newTramite = new tramite({codigo_tramite, tipo_tramite});

    if(documentos_tramite && casos_abiertos_tramite ){
        const foundDocumentos = await Documento.find({codigo_documento: {$in: documentos_tramite}})
        newTramite.documentos_tramite = foundDocumentos.map(documento => documento._id)

        const foundCasos = await Casos_abiertos.find({codigo_caso: {$in: casos_abiertos_tramite}})
        newTramite.casos_abiertos_tramite = foundCasos.map(casos_abiertos => casos_abiertos._id)
    }
    else{
        console.log("No sirve");
    }

    const tramiteSaved = await newTramite.save()
    res.status(201).json(tramiteSaved)
};