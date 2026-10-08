import { Request, Response, NextFunction } from "express";
import { BicycleService } from "./bicycle.service";

export class BicycleController {

    //OBTENER TODAS LAS BICICLETAS

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            //llama al servicio para obtener la lista de bicicletas
            const bicycles = await BicycleService.findAll();
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }

    //OBTENER UNA BICICLETA X SU ID

    static async getById(req: Request, res: Response, next: NextFunction) {

        try{
            //convertimos el parámetro id que viene en la URL de string a número
            const id = Number(req.params.id);
            const bicycle = await BicycleService.findById(id);

            //si no existe la bicicleta con ese ID, devolvemos 404
            if (!bicycle) {
                res.status(404).json({
                    message: "bicicleta no encontrada",
                });
                return;
            }

            res.json(bicycle);
        } catch (error) {
            next(error);
        }


    }

    //CREAR UNA NUEVA BICICLETA

    static async create(req: Request, res: Response, next: NextFunction) {
        //extraermos los datos del cuerpo de la petición (req.body)
        //ahora extraemos 'brandId' en vez del texto de la marca
        try{
            const { id, model, description, price, stock, brandId} = req.body;

        //comprobamos que los campos obligatorios estén
        if (!model || price === undefined || !brandId) {
            res.status(400).json({
                message: "los campos model, price y brandId son OBLIGATORIOS"
            });
            return;
        }
        
        //llamamos al servicio pasando los datos validados
        const bicycle = await BicycleService.create({
            model,
            description,
            price,
            stock,
            brandId,
        });
        
        res.status(201).json(bicycle);

        } catch (error) {
            next(error);
        }
    }

    //ACTUALIZAR UNA BICICLETA EXISTENTE

    static async update(req: Request, res: Response, next: NextFunction) {
        try{
            const id = Number(req.params.id);

            //buscamos si la bicicleta existe
            const bicycle = await BicycleService.findById(id);

            if (!bicycle) {
                res.status(404).json({
                    message: "bicicleta NO encontrada",
                });
                return;
            }

            //actualizamos la bicicleta pasándole la instancia actual y los datos nuevos de req.body
            const updateBicycle = await BicycleService.update(
                bicycle,
                req.body
            );

            res.json(updateBicycle);
        } catch (error) {
            next(error);
        }
    }

    //ELIMINAR UNA BICICLETA

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            // Buscamos si la bicicleta existe antes de eliminar
            const bicycle = await BicycleService.findById(id);

            if (!bicycle) {
                res.status(404).json({
                    message: "Bicicleta no encontrada",
                });
                return;
            }

            // Llamamos al servicio para eliminar el registro
            await BicycleService.delete(bicycle);

            // Respondemos con estado 204 (No Content) indicando que se eliminó correctamente
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}