import {Schema, model} from 'mongoose'

const empleadosSchema = new Schema({
    codigo_empleado: String,
    nombre_empleado: String,
    primer_apellido_empleado: String,
    segundo_apellido_empleado: String,
    fec_nac_empleado: Date,
    edad_empleado: Number,
    nacionalidad_empleado: String,
    direccon_empleado: String,
    correo_empleado: String,
    telefono_empleado: String,
    fec_ingreso_empleado: Date,
    puesto_empleado: String
},{
    versionKey: false
})

export default model ('Empleado', empleadosSchema)