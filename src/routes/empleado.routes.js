import {Router} from 'express'
import * as empleadoCtrl from '../controller/empleado.controller';

const router = Router()

router.post('/', empleadoCtrl.postEmpleados)
router.get('/', empleadoCtrl.getEmpleados)

export default router;