import {Router} from 'express'
import * as departamentoCtrl from '../controller/departamento.controller';

const router = Router()

router.post('/', departamentoCtrl.postDepartamento)
router.get('/getDepartamento', departamentoCtrl.getDepartamento)

export default router;