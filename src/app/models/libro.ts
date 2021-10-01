export class Libro{
    constructor(
        public _id:string,
        public autor:string,
        public titulo:string,
        public tituloBusqueda:[],
        public descripcion:string,
        public copias:number,
        public disponibles:number,
        public temas:string,
        public palabrasClave:[],
        public tipo:string,
        public image:string,
        public busquedas:number,
        public reservas:number 
    ){}
}