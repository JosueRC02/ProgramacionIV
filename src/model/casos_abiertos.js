import {Schema, model} from 'mongoose'

const casos_abiertosSchema = new Schema({

    codigo_caso:{
        type: String,
        required: true
    },

    fecha_apertura_caso:{
        type: Date,
        required: true
    },

    fecha_finalizacion_caso:{
        type: Date,
        required: true
    },
    
},{
    versionKey: false
})

export default model ('Casos_Abiertos', casos_abiertosSchema)