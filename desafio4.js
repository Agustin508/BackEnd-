const fs = require("fs");

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }


async save(obj){
    const data = await fs.promises.readFile("data/usuarios.json", "utf-8")
    const objetos = JSON.parse(data)
    const id = objetos.length + 1
    obj.id = id;
    obj.array = [];
    objetos.push(obj);
    const objetosString = JSON.stringify(objetos)
    await fs.promises.writeFile("data/usuarios.json", objetosString)
    return objetos
}

async getAll() {
    const data = await fs.promises.readFile("data/usuarios.json", "utf-8")
    return JSON.parse(data);

}

async getObjById(id) {
    const data = await fs.promises.readFile("data/usuarios.json", "utf-8");
    const objetos = JSON.parse(data);
    const objetoId = objetos.filter ((objeto) => objeto.id !== id);
    const objeto = objetos.find((objeto) => objeto.id == id);
    if(objeto) {
        return objeto
    }else{
        return null
    }
}

deleteAll() {
    fs.writeFileSync("data/usuarios.json", "[]");
    console.log("se borro todo");
    return "[]";
    
}

}

async function start(){
const db = new Contenedor("data");
//db.save({nombre:"eduardo"});
//const all = await db.getAll();
//console.log(all);
//const objeto = await db.getObjById(5);
//console.log(objeto)
//await db.deleteAll()
}

module.exports = Contenedor;