import {Router} from 'express'
import * as departamentoCtrl from '../controller/departamento.controller';

const router = Router()

router.post('/', departamentoCtrl.postDepartamento)

export default router;