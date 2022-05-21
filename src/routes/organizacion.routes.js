import {Router} from 'express'
import * as organizacionCtrl from '../controller/organizacion.controller';

const router = Router()

router.post('/', organizacionCtrl.postOrganizacion)

export default router;