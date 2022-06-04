import {Schema, model} from 'mongoose'

const tramitesSchema = new Schema({
    codigo_tramite:{
        type: String,
        required: true
    },

    codigo_departamento:{
        ref: "departamento", 
        type: Schema.Types.ObjectId
    },

    tipo_tramite:{
        type: String,
        required: true
    },

},{
    versionKey: false
})

export default model ('Tramite', tramitesSchema)