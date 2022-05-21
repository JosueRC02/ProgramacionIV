import departamento from "../model/departamento"

export const postDepartamentos = async (req, res) => {
    const {codigo_departamento, nombre_departamento, empleados_departamento, correo_departamento, telefono_departamento} = req.body
    const newDepartamento = new departamento({codigo_departamento, nombre_departamento, empleados_departamento, correo_departamento, telefono_departamento});
    const departamentoSaved = await newDepartamento.save()
    res.status(201).json(departamentoSaved)
};