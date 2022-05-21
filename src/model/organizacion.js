import {Schema, model} from 'mongoose'

const organizacionSchema = new Schema({
    nombre_organizacion: {
        type: String,
        unique: true,
        require: true,
        min: 6,
        max: 255
    },

    password:{
        type: String,
        required: true
    },

    area_negocio: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },

    ubicacion: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },

    telefono: {
        type: String,
        require: true,
    },
})

export default model ('Organizacion', organizacionSchema)