import departamento from "../model/departamento"
import Empleado from "../model/empleado"

export const signUpDepartamento = async (req, res) => {
    const {codigo_departamento, nombre_departamento, empleados_departamento, correo_departamento, telefono_departamento, password} = req.body
    const newDepartamento = new departamento({codigo_departamento, 
                                              nombre_departamento, 
                                              correo_departamento, 
                                              telefono_departamento, 
                                              password: await departamento.encryptpassword(password)});
    if(empleados_departamento){
        const foundEmpleados = await Empleado.find({codigo_empleado: {$in: empleados_departamento}})
        newDepartamento.empleados_departamento = foundEmpleados.map(empleado => empleado._id)
    }else{
        console.log("No sirve");
    }
    const departamentoSaved = await newDepartamento.save();
    console.log(departamentoSaved);
    res.status(201).json(departamentoSaved);
}
