export class User{

    constructor(
        public _id:string,
        public identifier:string,
        public name:string,
        public lastname:string,
        public username:string,
        public password:string,
        public email:string,
        public image:string,
        public role:string,
        public contadorLibros:number,
        public contadorHistorial:number,
        public libro: [],
        public historial: []
    ){}
}