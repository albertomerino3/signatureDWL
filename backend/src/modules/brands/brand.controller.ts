//CAPA DE CONTROL DE LA API
//recibe las peticiones de los usuarios desde la red (BRUNO)
//lee los datos de la URL (o peticion req.body), valida campos
//obligatorios, llama al servicio(BrandService) para procesar
//la información y devuelve la respuesta HTTP adecuada

//importamos los tipos de Express para definir los parámetros de los métodos
import { Request, Response, NextFfunction } from "express";

//importamos el servicio de marcas para delegarle las operaciones a la BD
import { BrandService } from "./brand.service";

export class BrandController {
    
}