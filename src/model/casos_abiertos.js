import {Schema, model} from 'mongoose'

const casos_abiertosSchema = new Schema({
    codigo_caso: Number,
    fecha_apertura_caso : Date,
    fecha_finalizacion_caso : Date
},{
    versionKey: false
})

export default model ('Casos_Abiertos', casos_abiertosSchema)