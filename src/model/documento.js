import {Schema, model} from 'mongoose'

const documentosSchema = new Schema({
    codigo_documento:{
        type: String,
        required: true
    },

    nombre_documento:{
        type: String,
        required: true
    },
},{
    versionKey: false
})

export default model ('Documentos', documentosSchema)