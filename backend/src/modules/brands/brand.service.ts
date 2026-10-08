//CAPA LÓGICA DE DATOS
//comunica con el modelo BRAND de sequelize para realizar las operaciones
//CRUD (crear, leer, actualizar, eliminar) en la BD de MYSQL


//importamos el modelo BRAND para interactuar con la tabla 'brand de MYSQL
import { Brand } from "./brand.model";

//exportamos la clase BrandService con métodos estáticos para no tener
//que instanciarla con 'new'
export class BrandService {

    //OBTENER TODAS LAS MARCAS
    //ejecuta una consulta SELECT a MYSQL devolviendo todas las marcas ordenadas
    //por su ID de forma ascendente
    static async findAll(){
        return Brand.findAll({
            order: [["id", "ASC"]],
        });
    }

    //BUSCAR MARCA POR SU ID
    //ejecuta SELECT * FROM brands WHERE id = <id> devolviendo la marca
    static async findById(id:number) {
        return Brand.findByPk(id);  //busca por Primary Key
    }

    //CREAR UNA NUEVA MARCA
    //ejecuta INSERT INTO en MYSQL con el nombre
    static async create(data: {name: string}) {
        return Brand.create(data);  //sequelize se encarga de crear el ID incremental
    }

    //ELIMINAR MARCA
    //ejecuta DELETE FROM en MYSQL eliminando la fila correspondiente
    static async delete(brand: Brand) {
        await brand.destroy(); //elimina el registro de la BD
    }
}