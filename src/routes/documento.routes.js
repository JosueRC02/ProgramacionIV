import {Router} from 'express'
import * as documentosCtrl from '../controller/documento.controller';

const router = Router()

router.post('/', documentosCtrl.postDocumentos)

export default router;