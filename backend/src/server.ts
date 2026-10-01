import { app } from "./app";
//impostar app que hemos exportado en app.ts

async function startServer() {
    try{        //arranca la apliWEB para que escuche en el puerto 3000
        app.listen(3000, () => {
            console.log(
                `Servidor funcionando en http://localhost:3000`
            );
        });
    } catch (error) {
        console.error(
            "No se pudo iniciar la aplicación",
            error
        );
        process.exit(1);
    }
}

startServer();  //se llama a la función

//comando npm run dev para arrancar la API
//nos da http://localhost:3000