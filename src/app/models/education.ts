export class Education {
    id?: number;
    
    img_institution: string;
    detalle: string;
    


    constructor(img_institution: string,detalle: string) {
       
        this.img_institution = img_institution;
        this.detalle = detalle;

    }
}
