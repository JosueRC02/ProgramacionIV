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
