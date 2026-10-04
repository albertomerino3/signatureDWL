import { app } from "./app";
//impostar app que hemos exportado en app.ts

import { sequelize } from "./config/database";
import { env } from "./config/env";

//importamos los modelos y así sequelize puede registrarlos
import "./modules/bicycles/bicycle.model";

async function startServer() {
    try{        //arranca la apliWEB para que escuche en el puerto 3000
        await sequelize.authenticate();
        console.log("Conection to MySQL established.");

        await sequelize.sync({force: true}).then(() => {
            console.log("Drop and re-sync db.");
        });
        
        app.listen(env.PORT, () => {
            console.log(
                `Servidor funcionando en http://localhost:${env.PORT}`
            );
        });
    } catch (error) {
        console.error(
            "No se pudo iniciar la aplicación:",
            error
        );
        process.exit(1);
    }
}

startServer();  //se llama a la función

//comando npm run dev para arrancar la API
//nos da http://localhost:3000