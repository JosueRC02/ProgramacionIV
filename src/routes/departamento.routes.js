import {Router} from 'express'
import * as departamentoCtrl from '../controller/departamento.controller';

const router = Router()

router.post('/', departamentoCtrl.postDepartamento)
router.get('/getDepartamento', departamentoCtrl.getDepartamento)
router.get('/getNDepartamento/:departamentoId', departamentoCtrl.getNDepartamento)
router.put('/:departamentoId', departamentoCtrl.updateDepartamentoById)
router.delete('/:departamentoId', departamentoCtrl.deleteDepartamentoById)

export default router;