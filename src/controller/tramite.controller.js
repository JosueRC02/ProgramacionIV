import tramite from "../model/tramite"
import departamento from "../model/departamento";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postTramite = async (req, res) => {
    try {
        const {codigo_tramite, codigo_departamento, tipo_tramite } = req.body
        const newTramite = new tramite({codigo_tramite, tipo_tramite});

        if(codigo_departamento){
            const foundDepartamento = await departamento.find({codigo_departamento: {$in: codigo_departamento}})
            newTramite.codigo_departamento = foundDepartamento.map(departamento => departamento._id)
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

export const getTramite = async (req, res) => {
    try {
        const tramites = await tramite.find();
        res.json(new BaseResponse(
            "Tramites",
            "Retorna todas los tramites",
            tramites));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los tramites",
            error.message
        ));
    }
};

export const updateTramiteById = async (req, res) => {
    try{
    const updatedTramite = await tramite.findByIdAndUpdate(req.params.tramiteId, req.body, {
        new: true
    });
    res.status(200).json(new BaseResponse(
        "Tramite",
        "Tramite actualizado",
        updatedTramite));
    }catch (error){
    res.status(400).json(new ResponseError(
        "Error al actualizar el tramite",
        error.message
    ));
    }
};

export const deleteTramiteById = async (req, res) => {
    try {
        const tramiteIdDelete = await departamento.findByIdAndDelete(req.params.tramiteId);
        res.status(200).json(new BaseResponse(
            "Tramite",
            "Se elimino un departamento con exito",
            tramiteIdDelete));
    }catch (error) {
        res.status(400).json(new ResponseError(
            "Error al eliminar el tramite",
            error.message
        ));
    }
}

export const getNTramite = async (req, res) => {
    try {
        const ListaDepartamentos = await tramite.find({codigo_departamento:req.params.tramiteId});
        res.json(new BaseResponse(
            "Departamentos",
            "Retorna todos las departamentos",
            ListaDepartamentos));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los departamentos",
            error.message
        ));
    }

};