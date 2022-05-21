import {Router} from 'express'
import * as organizacionCtrl from '../controller/organizacion.controller';

const router = Router()

router.post('/', organizacionCtrl.postOrganizacion)
router.get('/', organizacionCtrl.getOrganizaciones)

export default router;