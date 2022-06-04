import {Schema, model} from 'mongoose'

const documentosSchema = new Schema({
    codigo_documento:{
        type: String,
        required: true
    },

    codigo_tramite:{
        ref: "tramite", 
        type: Schema.Types.ObjectId
    },

    nombre_documento:{
        type: String,
        required: true
    },
},{
    versionKey: false
})

export default model ('Documentos', documentosSchema)