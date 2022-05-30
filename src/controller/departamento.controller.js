import departamento from "../model/departamento"
import Empleado from "../model/empleado"
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const signUpDepartamento = async (req, res) => {
    try {
        const {codigo_departamento, nombre_departamento, empleados_departamento, correo_departamento, telefono_departamento, password} = req.body
        const newDepartamento = new departamento({codigo_departamento, 
                                                nombre_departamento, 
                                                correo_departamento, 
                                                telefono_departamento, 
                                                password: await departamento.encryptpassword(password)});
        if(empleados_departamento){
            const foundEmpleados = await Empleado.find({codigo_empleado: {$in: empleados_departamento}})
            newDepartamento.empleados_departamento = foundEmpleados.map(empleado => empleado._id)
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
