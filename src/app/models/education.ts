export class Education {
    id?: number;
    detalle: string;
    img_institution: string;
    


    constructor(detalle: string, img_institution: string) {
        this.detalle = detalle
        this.img_institution = img_institution;

    }
}
