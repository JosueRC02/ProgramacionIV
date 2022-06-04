import empleado from "../model/empleado"
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postEmpleados = async (req, res) => {
    try {
        const {codigo_empleado, nombre_departamento,nombre_empleado,primer_apellido_empleado,segundo_apellido_empleado,
               fec_nac_empleado,nacionalidad_empleado,direccion_empleado,
               correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado} = req.body
        const newEmpleado = new empleado({codigo_empleado, nombre_departamento,nombre_empleado,primer_apellido_empleado,segundo_apellido_empleado,fec_nac_empleado,     nacionalidad_empleado,direccion_empleado,correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado});
        const empleadoSaved = await newEmpleado.save()
        res.status(201).json(new BaseResponse(
            "Empleados",
            "Se agregó el empleado",
            empleadoSaved));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al agregar el empleado",
            error.message
        ));
    }
};