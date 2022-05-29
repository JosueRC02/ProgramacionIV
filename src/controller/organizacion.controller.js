import departamento from "../model/departamento";
import organizacion from "../model/organizacion"


export const postOrganizacion = async (req, res) => {
    const {nombre_organizacion, password, area_negocio, ubicacion, telefono, departamentos_organizacion} = req.body
    const newOrganizacion = new organizacion({nombre_organizacion, password, area_negocio, ubicacion, telefono});

    if(departamentos_organizacion){
        const foundDepartamentos = await departamento.find({codigo_departamento: {$in: departamentos_organizacion}})
        newOrganizacion.departamentos_organizacion = foundDepartamentos.map(departamento => departamento._id)
    }else{
        console.log("No sirve");
    }

    const organizacionSaved = await newOrganizacion.save()
    res.status(201).json(organizacionSaved)
};

export const getOrganizaciones = async (req, res) => {
    const organizaciones = await organizacion.find();
    res.json(organizaciones)
};