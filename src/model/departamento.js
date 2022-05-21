import {Schema, model} from 'mongoose'

const departamentosSchema = new Schema({
    codigo_departamento: String,
    nombre_departamento: String,
    empleados_departamento: Array,
    correo_departamento: String,
    telefono_departamento: String
},{
    versionKey: false
})

export default model ('Departamento', departamentosSchema)