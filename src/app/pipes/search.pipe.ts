import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(libros: any, search:any): any {
    if(search == undefined){
      return libros;
    }else{
      return libros.filter(libro=>{
        return libro.titulo.toLowerCase().includes(search.toLowerCase()) ||
        libro.temas.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
