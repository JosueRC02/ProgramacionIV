import {Schema, model} from 'mongoose'

const tramitesSchema = new Schema({
    codigo_tramite:{
        type: String,
        required: true
    },

    tipo_tramite:{
        type: String,
        required: true
    },

    documentos_tramite:[{
        ref: "documento",
        type: Schema.Types.ObjectId
    }],

    casos_abiertos_tramite:[{
        ref: "casos_abiertos",
        type: Schema.Types.ObjectId
    }],
},{
    versionKey: false
})

export default model ('Tramite', tramitesSchema)