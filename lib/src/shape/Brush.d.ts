import Shape from "./Shape";
export default class Brush extends Shape {
    type: number;
    brushWidth: number;
    iseraser: boolean;
    boundingRect: number[];
    constructor(item: any, index: number);
    get ctrlsData(): any[];
}
