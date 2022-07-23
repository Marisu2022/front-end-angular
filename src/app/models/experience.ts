export class Experience {
    id?: number;
    periodo: string;
    descripcion: string;
    

    constructor(periodo: string, descripcion:string){
        
            this.periodo = periodo;
            this.descripcion= descripcion;
    }
}
