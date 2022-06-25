import {Router} from 'express'
import * as organizacionCtrl from '../controller/organizacion.controller';

const router = Router()

router.post('/singUpOrganizacion', organizacionCtrl.singUpOrganizacion)
router.post('/singInOrganizacion', organizacionCtrl.signInOrganizacion)
router.get('/getOrganizaciones', organizacionCtrl.getOrganizaciones)

export default router;