import mongoose, {Schema, model} from 'mongoose';

const departamentosSchema = new Schema({
    codigo_departamento: {
        type: String,
        unique: true
    },
    nombre_departamento: {
        type: String,
        unique: true
    },
    organizacion: {
        ref: "organizacion", 
        type: Schema.Types.ObjectId
    },
    correo_departamento: {
        type: String,
    },
    telefono_departamento: {
        type: String,
    },

},{
    versionKey: false
});


export default model ('Departamento', departamentosSchema)