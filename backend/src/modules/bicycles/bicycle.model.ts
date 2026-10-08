import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    //añadimos la FK brandId
    ForeignKey,
    NonAttribute,
} from "sequelize";

//importamos la conexión a la BD
import { sequelize } from "../../config/database";

//importamos el modelo BRAND para poder hacer referencia a él en el tipo de la FK
import { Brand } from "../brands/brand.model";

//DEFINICIÓN DE LA CLASE:
export class Bicycle extends Model<
    InferAttributes<Bicycle>,
    InferCreationAttributes<Bicycle>
> {
    declare id: CreationOptional<number>;
    declare brand: string;
    declare model: string;
    declare description: string | null;
    declare price: number;
    declare stock: number;

    //clave foránea
    declare brandId: number;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

//INICIALIZACIÓN DEL MODELO en sequelize
Bicycle.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        //COLUMNA clave foránea
        brandId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,   //exige que toda bilicleta pertenezca a una marca
        references: { model: "brands", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "bicycles",
        timestamps: true,
    }
);