export class Portada {
    
        id?: number;
        nombre: string;
        apellido: string;
        info: string;
        img_profile: string;
        
    
        constructor(nombre: string, apellido:string, info:string,img_profile:string){
        
            this.nombre = nombre;
            this.apellido= apellido;
            this.info = info;
            this.img_profile = img_profile;
    }
    }

