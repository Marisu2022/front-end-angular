export class Projects {
    id?: number;
    img_proyecto: string;
    anio: string;
    herramientas: string;
    nombre_proyecto:string;
    descripcion_proyecto: string;
    

    constructor(img_proyecto: string, anio:string, herramientas:string,nombre_proyecto:string,descripcion_proyecto:string){
    
        this.img_proyecto = img_proyecto;
        this.anio= anio;
        this.herramientas = herramientas;
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion_proyecto = descripcion_proyecto;
}
}

