export class Skill {
    id?: number;
    text_circle: string;
    percent_circle: string;
    
    

    constructor(text_circle: string, percent_circle:string){
    this.text_circle = text_circle;
            this.percent_circle= percent_circle;
}
}