import express from "express";  //importamos librería
import apiRouter from "./routes";

export const app = express();   //se usa express usando constante app

app.use(express.json());

app.use("/api", apiRouter);     //todas las rutas empiezan con /api

app.get("/", (req, res) => {    //END POINT GET que devuelve un mensaje
    res.json({                  // en formato JSON
        message: "API funcionando",
    })
});

app.get("/algo", (req, res) => {    //END POINT GET que devuelve un mensaje
    res.json({                  // en formato JSON
        message: "algo funcionando",
    })
});