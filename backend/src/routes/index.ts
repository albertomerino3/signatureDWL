//ENRUTADOR CENTRAL
//une y organiza todas las rutas modulares del proyecto

import { Router } from "express";
import bicycleRoutes from "../modules/bicycles/bicycle.routes"; //ruta bicicletas
import brandRoutes from "../modules/brands/brand.routes";   //rutas de marcas

const router = Router();

//vincular las rutas con su prefijo 
router.use("/bicycles", bicycleRoutes);
router.use("/brands", brandRoutes); //registramos la ruta /brands


export default router;