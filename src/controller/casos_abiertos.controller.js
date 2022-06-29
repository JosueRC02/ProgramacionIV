import casos_abiertos from "../model/casos_abiertos";
import tramite from "../model/tramite";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postCasos_Abiertos = async (req, res) => {
    try{
        const {codigo_caso, fecha_apertura_caso,fecha_finalizacion_caso,codigo_tramite} = req.body
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

export const updateCasoById = async (req, res) => {
    try{
    const updatedCaso = await casos_abiertos.findByIdAndUpdate(req.params.casoId, req.body, {
        new: true
    });
    res.status(200).json(new BaseResponse(
        "Caso",
        "Caso actualizado",
        updatedCaso));
    }catch (error){
    res.status(400).json(new ResponseError(
        "Error al actualizar el caso",
        error.message
    ));
    }
};

export const deleteCasoById = async (req, res) => {
    try {
        const CasoIdDelete = await casos_abiertos.findByIdAndDelete(req.params.casoId);
        res.status(200).json(new BaseResponse(
            "Caso",
            "Se elimino un caso con exito",
            CasoIdDelete));
    }catch (error) {
        res.status(400).json(new ResponseError(
            "Error al eliminar el tramite",
            error.message
        ));
    }
}

export const getCaso = async (req, res) => {
    try {
        const casos = await casos_abiertos.find();
        res.json(new BaseResponse(
            "Caso",
            "Retorna todos los Caso",
            casos));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los casos",
            error.message
        ));
    }
};

export const getNCaso = async (req, res) => {
    try {
        const ListaCasos = await casos_abiertos.find({codigo_tramite:req.params.casoId});
        res.json(new BaseResponse(
            "Departamentos",
            "Retorna todos las departamentos",
            ListaCasos));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los departamentos",
            error.message
        ));
    }
};