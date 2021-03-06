import {Router} from 'express'
import * as empleadoCtrl from '../controller/empleado.controller';

const router = Router()

router.post('/', empleadoCtrl.postEmpleados)
router.get('/', empleadoCtrl.getEmpleados)
router.put('/:empleadoId', empleadoCtrl.updateEmpleadoById)
router.delete('/:empleadoId', empleadoCtrl.deleteEmpleadoById)
router.get('/getNEmpleado/:empleadoId', empleadoCtrl.getNEmpleado)

export default router;