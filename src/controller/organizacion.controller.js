import organizacion from "../model/organizacion"


export const postOrganizacion = async (req, res) => {
    const {nombre_organizacion, password, area_negocio, ubicacion, telefono} = req.body
    const newOrganizacion = new organizacion({nombre_organizacion, password, area_negocio, ubicacion, telefono});
    const organizacionSaved = await newOrganizacion.save()
    res.status(201).json(organizacionSaved)
};

export const getOrganizaciones = async (req, res) => {
    const organizaciones = await organizacion.find();
    res.json(organizaciones)
};