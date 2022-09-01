const express = require("express")
const app = express();
const Container = require("./desafio4")
const contenedor = new Container ("data")




app.get("/", (req, res) =>{
    res.send({error:false});
});

app.get("/usuarios", async (req, res)=>{
    const data= await contenedor.getAll();
    res.send(data);
})

app.get("/randomProduct", async (req, res) => {
  let randomNum = Math.floor(Math.random() * 9 + 1);
  let data = await contenedor.getObjById(randomNum);
  data === null
    ? res.send(`<h4>ID:${randomNum} No se encontro el id</h4>`)
    : res.json(data);
});





app.listen(8080, ()=>{
    console.log("Iniciado")
}
)