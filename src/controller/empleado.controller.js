import departamento from "../model/departamento";
import Departamento from "../model/departamento";
import empleado from "../model/empleado"
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";

export const postEmpleados = async (req, res) => {
    try {
        const {codigo_empleado, nombre_departamento, nombre_empleado,primer_apellido_empleado,segundo_apellido_empleado,
               fec_nac_empleado,nacionalidad_empleado,direccion_empleado,
               correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado} = req.body

        const newEmpleado = new empleado({codigo_empleado, nombre_empleado, primer_apellido_empleado,segundo_apellido_empleado,fec_nac_empleado, nacionalidad_empleado,direccion_empleado,correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado});
        if(nombre_departamento){
            const foundDepartamento = await Departamento.find({codigo_departamento: {$in: nombre_departamento}})
            newEmpleado.nombre_departamento = foundDepartamento.map(departamento => departamento._id)
        }
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

export const getEmpleados = async (req, res) => {
    try {
        const empleados = await empleado.find();
        res.json(new BaseResponse(
            "Organizaciones",
            "Retorna todas los empleados",
            empleados));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los empleados",
            error.message
        ));
    }
};

export const updateEmpleadoById = async (req, res) => {
    try{
    const updatedEmpleado = await empleado.findByIdAndUpdate(req.params.empleadoId, req.body, {
        new: true
    });
    res.status(200).json(new BaseResponse(
        "Empleados",
        "Empleado actualizado",
        updatedEmpleado));
    }catch (error){
    res.status(400).json(new ResponseError(
        "Error al actualizar el empleado",
        error.message
    ));
    }
};

export const deleteEmpleadoById = async (req, res) => {
    try {
        const empleadoIdDelete = await empleado.findByIdAndDelete(req.params.empleadoId);
        res.status(200).json(new BaseResponse(
            "Departamentos",
            "Se elimino un departamento con exito",
            empleadoIdDelete));
    }catch (error) {
        res.status(400).json(new ResponseError(
            "Error al eliminar el departamento",
            error.message
        ));
    }
}

export const getNEmpleado = async (req, res) => {
    try {
        const ListaEmpleados = await empleado.find({nombre_departamento:req.params.empleadoId});
        res.json(new BaseResponse(
            "Departamentos",
            "Retorna todos las departamentos",
            ListaEmpleados));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al retornar los departamentos",
            error.message
        ));
    }
};