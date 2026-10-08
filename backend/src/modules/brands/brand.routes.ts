//registramos el enrutador de marcas dentro del enturador principal
//para que express sepa a qué controlador enviar las peticiones
//que empiecen por /brands o /api/brands

import { Router } from "express";
import { BrandController } from "./brand.controller";

const router = Router();

//definición de endpoints CRUD para brands
router.get("/", BrandController.getAll);
router.get("/id", BrandController.getById);
router.post("/", BrandController.create);
router.put("/:id", BrandController.update);
router.delete("/:id", BrandController.delete);

export default router;