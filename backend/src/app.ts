import express from "express";  //importamos librería

export const app = express();   //se usa express usando constante app

app.use(express.json());

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