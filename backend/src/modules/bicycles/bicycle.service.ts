import { Bicycle } from "./bicycle.model";
import { Brand } from "../brands/brand.model";

export class BicycleService {

    //OBTENER TODAS LAS BICICLETAS (y la marca asociada)

    static async findAll() {
        return Bicycle.findAll({
            include: [
                {
                    model: Brand,
                },
            ],
            order: [["id", "ASC"]],
        });
    }
    
    //BUSCAR BICICLETA POR ID (incluyendo marca asociada)

    static async findById(id: number) {
        return Bicycle.findByPk(id, {
            include: [
                {
                    model: Brand,
                },
            ],
        });
    }

    //CREAR NUEVA BICICLETA

    static async create(data: {
        model: string;
        description?: string | null;
        price: number;
        stock: number;
        brandId: number; //clave foránea
    }) {
       return Bicycle.create(data as any); 
    }

    //ACTUALIZAR UNA BICICLETA EXISTENTE

    static async update(
        bicycle: Bicycle,
        data: {
            model?: string;
            description?: string | null;
            price?: number;
            stock?: number;
            brandId?: number;
        }
    ) {
        return bicycle.update(data);
    }

    //ELIMINAR UNA BICICLETA

    static async delete(bicycle: Bicycle) {
        await bicycle.destroy();
    }
}