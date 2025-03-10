import Shape from "./Shape";
export default class Line extends Shape {
    type: number;
    boundingRect: number[];
    constructor(item: any, index: number);
    get ctrlsData(): any[];
}
