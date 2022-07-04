import departamento from "../model/departamento"
import Organizacion from "../model/organizacion"	
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postDepartamento = async (req, res) => {
    try {
        const {codigo_departamento, nombre_departamento, organizacion, correo_departamento, telefono_departamento} = req.body
        const newDepartamento = new departamento({codigo_departamento, nombre_departamento, correo_departamento, telefono_departamento});

        if(organizacion){
            const foundOrganizacion = await Organizacion.find({codigo_organizacion: {$in: organizacion}})
            newDepartamento.organizacion = foundOrganizacion.map(organizacion => organizacion._id)
        }
        
        const departamentoSaved = await newDepartamento.save();
        res.status(201).json(new BaseResponse(
            "Departamentos",
            "Se agregó el departamento",
            departamentoSaved));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar el departamento",
            error.message
        ));
    }
    
}

export const getDepartamento = async (req, res) => {
    try {
        const ListaDepartamentos = await departamento.find();
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

export const updateDepartamentoById = async (req, res) => {
    try{
    const updatedDepartamento = await departamento.findByIdAndUpdate(req.params.departamentoId, req.body, {
        new: true
    });
    res.status(200).json(new BaseResponse(
        "Departamentos",
        "Departamento actualizado",
        updatedDepartamento));
    }catch (error){
    res.status(400).json(new ResponseError(
        "Error al actualizar el departamento",
        error.message
    ));
    }
};

export const deleteDepartamentoById = async (req, res) => {
    try {
        const departamentoIdDelete = await departamento.findByIdAndDelete(req.params.departamentoId);
        res.status(200).json(new BaseResponse(
            "Departamentos",
            "Se elimino un departamento con exito",
            departamentoIdDelete));
    }catch (error) {
        res.status(400).json(new ResponseError(
            "Error al eliminar el departamento",
            error.message
        ));
    }
}

export const getNDepartamento = async (req, res) => {
    try {
        const ListaDepartamentos = await departamento.find({organizacion:req.params.departamentoId});
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
