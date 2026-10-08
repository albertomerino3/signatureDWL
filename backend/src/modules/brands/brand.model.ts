//importaciones de sequelize para definir el modelo

import {
    Model,                  //se heredan todos los modelos
    DataTypes,              //contiene los tipos de datos de MySQL
    InferAttributes,        // para inferir (detectar) los campos del modelo
    InferCreationAttributes,//detecta qué campos son necesarios al CREAR un registro
    CreationOptional,       //Indica a TypeScript que un campo es opcional al crear
} from "sequelize";

//CONEXIÓN A LA BASE DE DATOS

import {sequelize} from "../../config/database";

//DEFINICIÓN DE LA CLASE DEL MODELO

export class Brand extends Model <
    InferAttributes<Brand>,
    InferCreationAttributes<Brand>
> {
    //declare le dice a typscript que estas propiedades existirán en las instancias
    //pero sequelize las gestiona dinámicamente desde la base de datos

    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

//INICIALIZACIÓN DEL MODELO EN SEQUELIZE

Brand.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,   //entero sin signo ni negativos
            autoIncrement: true,                //genera números automáticos
            primaryKey: true,                   //define esta columna como PK
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,                   //false es como NOTNULL
            unique: true,                       //no puede haber dos marcas iguales
        },
        createdAt: DataTypes.DATE,              //guarda fecha creación
        updatedAt: DataTypes.DATE,              //guarda fecha modificación
    },
    {
        sequelize,
        tableName: "brands",
        timestamps: true,
    }
);