import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import organizacionRoutes from './routes/organizacion.routes';
import departamentoRoutes from './routes/departamento.routes';
import empleadoRoutes from './routes/empleado.routes';
import tramiteRoutes from './routes/tramite.routes';
import casos_abiertosRoutes from './routes/casos_abiertos.routes';

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use('/api/organizacion', organizacionRoutes);
app.use('/api/departamento', departamentoRoutes);
app.use('/api/empleado', empleadoRoutes);
app.use('/api/tramite', tramiteRoutes);
app.use('/api/casos_abiertos', casos_abiertosRoutes);

export default app;

