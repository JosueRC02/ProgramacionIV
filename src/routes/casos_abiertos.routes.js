import {Router} from 'express'
import * as casos_abiertosCtrl from '../controller/casos_abiertos.controller';

const router = Router()

router.post('/', casos_abiertosCtrl.postCasos_Abiertos)
router.put('/:casoId', casos_abiertosCtrl.updateCasoById)
router.get('/getCaso', casos_abiertosCtrl.getCaso)
router.delete('/:casoId', casos_abiertosCtrl.deleteCasoById)
router.get('/getNCaso/:casoId', casos_abiertosCtrl.getNCaso)

export default router;