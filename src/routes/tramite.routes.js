import {Router} from 'express'
import * as tramiteCtrl from '../controller/tramite.controller';

const router = Router()

router.post('/', tramiteCtrl.postTramite)
router.get('/getTramite', tramiteCtrl.getTramite)
router.get('/getNTramite/:tramiteId', tramiteCtrl.getNTramite)
router.put('/:tramiteId', tramiteCtrl.updateTramiteById)
router.delete('/:tramiteId', tramiteCtrl.deleteTramiteById)

export default router;