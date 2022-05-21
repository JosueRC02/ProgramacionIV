import empleado from "../model/empleado"

export const postEmpleados = async (req, res) => {
    const {codigo_empleado,nombre_empleado,primer_apellido_empleado,segundo_apellido_empleado,fec_nac_empleado,edad_empleado,nacionalidad_empleado,direccon_empleado,
        correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado} = req.body
    const newEmpleado = new empleado({codigo_empleado,nombre_empleado,primer_apellido_empleado,segundo_apellido_empleado,fec_nac_empleado,edad_empleado,
        nacionalidad_empleado,direccon_empleado,correo_empleado,telefono_empleado,fec_ingreso_empleado,puesto_empleado});
    const empleadoSaved = await newEmpleado.save()
    res.status(201).json(empleadoSaved)
};