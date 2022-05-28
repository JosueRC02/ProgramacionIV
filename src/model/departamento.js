import mongoose, {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const departamentosSchema = new Schema({
    codigo_departamento: {
        type: String,
        unique: true
    },
    nombre_departamento: {
        type: String,
        unique: true
    },
    empleados_departamento: [{
        ref: "empleado",
        type: Schema.Types.ObjectId
    }],
    correo_departamento: {
        type: String,
    },
    telefono_departamento: {
        type: String,
    },
    password: {
        type: String,
    }
},{
    versionKey: false
});

departamentosSchema.statics.encryptpassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

departamentosSchema.statics.comparepassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model ('Departamento', departamentosSchema)