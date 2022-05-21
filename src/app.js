import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import organizacionRoutes from './routes/organizacion.routes';
import departamentoRoutes from './routes/departamento.routes';
import empleadoRoutes from './routes/empleado.routes';

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use('/api/organizacion', organizacionRoutes);
app.use('/api/departamento', departamentoRoutes);
app.use('/api/empleado', empleadoRoutes);

export default app;

