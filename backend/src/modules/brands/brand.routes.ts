//registramos el enrutador de marcas dentro del enturador principal
//para que express sepa a qué controlador enviar las peticiones
//que empiecen por /brands o /api/brands

//mapea cada verbo HTTP (get, post, put, delete) y cada endpoint (/, /:id)
//con la función adecuada de la clase BrandController

import { Router } from "express";   //creador de enrutadores
import { BrandController } from "./brand.controller";   //controlador de marcas
//que manejará la lógica de  cada ruta

const router = Router();

//definición de endpoints CRUD para brands
router.get("/", BrandController.getAll);    //lista de marcas
router.get("/:id", BrandController.getById); //obtener una marca
router.post("/", BrandController.create);   //guardar marca nueva
router.put("/:id", BrandController.update); //modificar
router.delete("/:id", BrandController.delete);  //eliminar

export default router;