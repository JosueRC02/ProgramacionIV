import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs';

const organizacionSchema = new Schema({
    nombre_organizacion: {
        type: String,
        unique: true,
        require: true,
        min: 6,
        max: 255
    },

    codigo_organizacion:{
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
        require: true
    },

    password: {
        type: String,
        require: true
    },
},{
    versionKey: false
})

organizacionSchema.statics.encryptpassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

organizacionSchema.statics.comparepassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model ('organizacion', organizacionSchema)