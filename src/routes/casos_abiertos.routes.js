import {Router} from 'express'
import * as casos_abiertosCtrl from '../controller/casos_abiertos.controller';

const router = Router()

router.post('/', casos_abiertosCtrl.postCasos_Abiertos)

export default router;