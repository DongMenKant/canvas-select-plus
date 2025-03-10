import Shape from './Shape';
export default class Rect extends Shape {
    type: number;
    iscontour: boolean;
    constructor(item: any, index: number);
    get ctrlsData(): any[][];
}
