import express from "express"

import "./database"

const app = express()

// app.get("/", (request, response) => {
//     return response.send("Olá NLW5")
// })
app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05",
        author: "Rogério Feliciano"
    })
})

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário cadastrado com  sucesso!!"
    })
})


app.listen(3333, () => console.log('Server is runing on 3333 port...'));
