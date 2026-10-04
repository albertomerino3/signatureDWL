import { Request, Response, NextFunction } from "express";
import { BicycleService } from "./bicycle.service";

export class BicycleController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const bicycles = await BicycleService.findAll();
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }
    static async getById(req: Request, res: Response, next: NextFunction) {

    }
    static async create(req: Request, res: Response, next: NextFunction) {
    }

    static async update(req: Request, res: Response, next: NextFunction) {
    }
    static async delete(req: Request, res: Response, next: NextFunction) {

    }
}