import { Bicycle } from "./bicycle.model";

export class BicycleService {
    static async findAll() {
        return Bicycle.findAll({
            order: [["id", "ASC"]],
        });
    }
    
    static async findById(id: number) {

    }

    static async create(data: {
        brand: string;
        model: string;
        description?: string | null;
        price: number;
        stock: number;
    }) {
  ;
    }

    static async update(
        bicycle: Bicycle,
        data: {
            brand?: string;
            models?: string;
            description?: string | null;
            price?: number;
            stock?: number;
        }
    ) {

    }

    static async delete(bicycle: Bicycle) {

    }
}