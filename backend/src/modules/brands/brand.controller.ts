//CAPA DE CONTROL DE LA API
//recibe las peticiones de los usuarios desde la red (BRUNO)
//lee los datos de la URL (o peticion req.body), valida campos
//obligatorios, llama al servicio(BrandService) para procesar
//la información y devuelve la respuesta HTTP adecuada

//importamos los tipos de Express para definir los parámetros de los métodos
import { Request, Response, NextFunction } from "express";

//importamos el servicio de marcas para delegarle las operaciones a la BD
import { BrandService } from "./brand.service";

export class BrandController {
    //GET /brands - devuelve la lista completa de marcas
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try{
            //convierte el ID de la URL (string) a número
            const id = Number(req.params.id);

            //busca la marca usando el servicio
            const brand = await BrandService.findById(id);

            //si no encuentra, responde error
            if(!brand) {
                res.status(404).json({ message: "marca no encontrada "});
                return;
            }

            //devuelve la marca encontrada
            res.json(brand);
        } catch (error) {
            next(error);
        }
    }

    //GET /brands/:id - devuelve una única marca x su ID
    static async getById(req: Request, res: Response, next: NextFunction) {
        try{
            //convierte el ID de la URL a número
            const id = Number(req.params.id);

            //busca la marca usando el servicio
            const brand = await BrandService.findById(id);

            //si no encuentra, responde con error 404
            if(!brand) {
                res.status(404).json({ message: "marca no encontrada" });
                return;
            }
            //devuelve la marca encontrada
            res.json(brand);
        } catch (error) {
            next(error);
        }
    }

    //POST /brands - crea una nueva marca en el sistema
    static async create(req: Request, res: Response, next: NextFunction) {
        try{
            //extrae el nombre del cuerpo de la petición (JSON)
            const { name } = req.body;

            //validación : si el nombre está vacío no se envía , devuelve error
            if(!name) {
                res.status(400).json({ message: "El campo ' name ' es OBLIGATORIO"});
                return;
            }

            //llama al servicio para guardar la marca en BD
            const brand = await BrandService.create({ name });

            //responde con estado 201 y el objeto creado
            res.status(201).json(brand);
        } catch(error){
            next(error);
        }
    }

    //PUT /brands/:id - actualiza una marca existente
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            //comprueba si la marca existe en la BD
            const brand = await BrandService.findById(id);

            if(!brand) {
                res.status(404).json({message: "Marca no encontrada "});
                return;
            }

            //actualiza la marca pasando la instancia actual y el nuevo nombre
            const updatedBrand = await BrandService.update(brand, req.body);

            //devuelve la marca modificada
            res.json(updatedBrand);
        } catch(error) {
            next(error);
        }
    }

    //DELETE /brands/:id - elimina una marca de la BD
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            //comprueba si la marca existe antes de borrarla
            const brand = await BrandService.findById(id);

            if(!brand) {
                res.status(404).json ({ message: "marca no encontrada "});
                return;
            }

            //elimina la marca mediante el servicio
            await BrandService.delete(brand);

            //responde con el estado 204 indicando que el borrado se hizo
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}