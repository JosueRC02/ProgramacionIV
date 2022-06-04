import organizacion from "../model/organizacion"
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const singUpOrganizacion = async (req, res) => {
    try {
        const {nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono, password} = req.body
        const newOrganizacion = new organizacion({nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono, password: await organizacion.encryptpassword(password)});

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

export const signInOrganizacion = async (req, res) => {
    try {
      const organizacionFound = await organizacion.findOne({ codigo_organizacion: req.body.codigo_organizacion });
      if (!organizacionFound) return res.status(400).json(new ResponseError("El usuario no coincide", "No digito bien el codigo de la organizacion"));
  
      const matchPassword = await organizacion.comparepassword(
        req.body.password,
        organizacionFound.password
      );
      if (!matchPassword)
        return res.status(401).json(new ResponseError(
            "La contraseña no coincide",
            "Las credeciales no existen"
        ));
  
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar la organizacion",
            error.message
        ));
    }
}

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
}