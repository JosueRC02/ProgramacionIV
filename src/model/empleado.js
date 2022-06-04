import {Schema, model} from 'mongoose'

const empleadosSchema = new Schema({
    codigo_empleado: {type: String},
    nombre_departamento: {ref: "departamento", type: Schema.Types.ObjectId},
    nombre_empleado: {type: String},
    primer_apellido_empleado: {type: String},
    segundo_apellido_empleado: {type: String},
    fec_nac_empleado: {type: Date},
    nacionalidad_empleado: {type: String},
    direccion_empleado: {type: String},
    correo_empleado: {type: String},
    telefono_empleado: {type: String},
    fec_ingreso_empleado: {type: Date},
    puesto_empleado: {type: String},
},{
    versionKey: false
})

export default model ('Empleado', empleadosSchema)