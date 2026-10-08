# 🚲 Bicycle Shop API Backend

API RESTful para la gestión de un inventario de bicicletas y marcas, desarrollada con **Node.js**, **Express**, **TypeScript**, **Sequelize ORM** y **MySQL**.

---

## 🛠️ Tecnologías utilizadas

* **Lenguaje:** TypeScript / Node.js
* **Framework Web:** Express.js
* **ORM:** Sequelize
* **Base de Datos:** MySQL
* **Cliente HTTP de pruebas:** Bruno

---

## 🗄️ Modelo de Datos y Relaciones

El proyecto implementa una relación **1:N (Uno a Muchos)** entre las marcas (`brands`) y las bicicletas (`bicycles`):

* **Marca (Brand):** Puede tener asociadas múltiples bicicletas.
* **Bicicleta (Bicycle):** Pertenece obligatoriamente a una única marca mediante la clave foránea `brandId`.
