import {Router} from 'express'
import * as tramiteCtrl from '../controller/tramite.controller';

const router = Router()

router.post('/', tramiteCtrl.postTramite)

export default router;