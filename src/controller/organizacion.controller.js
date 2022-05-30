import departamento from "../model/departamento";
import organizacion from "../model/organizacion"
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";


export const postOrganizacion = async (req, res) => {
    try {
        const {nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono, departamentos_organizacion} = req.body
        const newOrganizacion = new organizacion({nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono});

        if(departamentos_organizacion){
            const foundDepartamentos = await departamento.find({codigo_departamento: {$in: departamentos_organizacion}})
            newOrganizacion.departamentos_organizacion = foundDepartamentos.map(departamento => departamento._id)
    }
        const organizacionSaved = await newOrganizacion.save()
        res.status(201).json(new BaseResponse(
            "Organizaciones",
            "Se agregó la organizacion",
            organizacionSaved));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar la organizacion",
            error.message
        ));
    }
};

export const getOrganizaciones = async (req, res) => {
    try {
        const organizaciones = await organizacion.find();
        res.json(new BaseResponse(
            "Organizaciones",
            "Retorna todas las organizaciones",
            organizaciones));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar las organizaciones",
            error.message
        ));
    }
};