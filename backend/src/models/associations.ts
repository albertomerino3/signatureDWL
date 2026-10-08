import { Bicycle } from "../modules/bicycles/bicycle.model";

import { Brand } from "../modules/brands/brand.model";

//relación 1:N
export function defineAssociations() {
    Brand.hasMany(Bicycle, {foreignKey: "brandId", as: "bicycles"});
    Bicycle.belongsTo(Brand, {foreignKey: "brandId", as: "brand"});
}
