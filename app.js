const fs = require('fs');

class Container {
    constructor(name){
        this.name = name;
    }

    async getAll() {
        try {
            let content = await fs.promises.readFile(`./${this.name}`,'utf-8');
            content = JSON.parse(content)
            return content
        }
        catch (err) {
            return err
        }

    }


    async saveInfo(info){
        try {
            const content = await this.getAll();
            content.map(obj => {if (obj.id == info.id) throw new Error ('ID existente')}) // Error si encuentra IDs duplicadas
            content.push(info);
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(content));
            return `Objeto cargado correctamente. ID: ${info.id}`
        }
        catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    async getById(id) {
        try {
            const content = await this.getAll();
            let response;
            content.map(obj => {(obj.id == id) ? response = obj : response = 'Este ID no fue encontrado'});
            return response;
        }
        catch (err){
            return err
        }
    }

    async deleteById(id) {
        try {
            const content = await this.getAll();
            const newContent = content.filter(e => {e.id !== id})
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(newContent));
            return newContent;
        }
        catch (err){
            return err
        }
    }

    async deleteAll() {
        try {
            const content = await this.getAll();
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify([]));
            return console.log("contenido eliminado");
        }
        catch (error) {
          console.log(error);
        }
      }

    
}



const producto = {
    id:3,
    name: "Campera de cuero",
    stock: 10,
    price: 900.0,
  };



const contenedor = new Container("productos.json");


contenedor.saveInfo(producto).then((res) => console.log(res)); // Carga la Informacion nueva

// contenedor.getById(2).then((res) => console.log(res));  // Buscar por su ID

// contenedor.getAll().then((res) => console.log(res)); // Obtiene todo el objeto

// contenedor.deleteById(1).then((res) => console.log(res));

// contenedor.deleteAll().then((res) => console.log(res));
