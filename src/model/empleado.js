import {Schema, model} from 'mongoose'

const empleadosSchema = new Schema({
    codigo_empleado: String,
    nombre_departamento: String,
    nombre_empleado: String,
    primer_apellido_empleado: String,
    segundo_apellido_empleado: String,
    fec_nac_empleado: Date,
    nacionalidad_empleado: String,
    direccion_empleado: String,
    correo_empleado: String,
    telefono_empleado: String,
    fec_ingreso_empleado: Date,
    puesto_empleado: String
},{
    versionKey: false
})

export default model ('Empleado', empleadosSchema)