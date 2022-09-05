export class Skill {
    id?: number;
    text_circle: string;
    percent: string;
    
    

    constructor(text_circle: string, percent:string){
    this.text_circle = text_circle;
            this.percent= percent;
}
}