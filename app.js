class Usuario {
    constructor(name, surname, books, pet){
        this.userName = name;
        this.userLastname = surname;
        this.userBooks = books;
        this.userPet = pet;
    }

    getFullName (){
        return console.log(`Hola ${this.userName} ${this.userLastname}.`);
    }

    addPet(newPet){
        this.userPet.push(newPet);
    }

    countPets(){
        let i = 0;
        this.userPet.forEach(element => ++i);
        return console.log(`Usted tiene ${i} mascotas.`);
    }
 
    getBookNames(){
        this.userBooks.forEach(element => console.log(element.title));
    }

};

const user = new Usuario('Enrique','Lopez',[{title : 'The Mist', author : 'Stephen King'},{title : 'Star Wars', author : 'George Lucas'}], ['Gato','Foca']);
const user2 = new Usuario('Gabriel','Sanchez',[{title : 'IT', author : 'Stephen King'},{title : 'Dune', author : 'Frank Herbert'}], ['Leon','Nutria']);

console.log(user);
console.log(user2);
//user 1 
user.getFullName();
user.addPet('Athos');
user.countPets();
console.log( `${user.userName} tiene estos libros:` );
user.getBookNames();

console.log(user);
//user 2
user2.getFullName();
user2.addPet('Ardilla');
user2.addPet('Lobo marino');
user2.addPet('Iguana');
user2.countPets();
console.log( `${user2.userName} tiene estos libros:` );
user2.getBookNames();
console.log(user2);
