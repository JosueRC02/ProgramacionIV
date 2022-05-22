import {Schema, model} from 'mongoose'

const tramitesSchema = new Schema({
    tipo_tramite: String,
    documento_tramite: Array,
    codigo_departamento_tramite: String
},{
    versionKey: false
})

export default model ('Tramite', tramitesSchema)