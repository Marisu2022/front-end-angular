export class Skill {
    id?: number;
    text_circle: string;
    percent: number;
    
    

    constructor(text_circle: string, percent:number){
    this.text_circle = text_circle;
            this.percent= percent;
}
}