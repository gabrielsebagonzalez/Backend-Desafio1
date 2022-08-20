class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`  
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }
        
    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre, autor})
    }

    getBookNames() {
        return this.libros.map(obj => obj.nombre)
    }
    
}

const usuario = new Usuario('Sebastián', 'González', [{nombre: 'El señor de las moscas',autor: 'William Golding'}], ['Lola'])
console.log(usuario.getFullName())

usuario.addMascota('Odi')
console.log(`El usuario ${usuario.getFullName()} tiene ${usuario.countMascotas()} mascotas`)

usuario.addBook('Oliver Twist', 'Charles Dickens')
usuario.addBook('Cien Años de Soledad', 'Gabriel Garcia Márquez')
console.log(usuario.getBookNames());

console.log(usuario)

        









