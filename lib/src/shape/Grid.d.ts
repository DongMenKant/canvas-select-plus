import Shape from './Shape';
import Rect from './Rect';
export default class Grid extends Shape {
    type: number;
    row: number;
    col: number;
    selected: number[];
    selectedFillStyle: string;
    constructor(item: any, index: number);
    get ctrlsData(): any[][];
    get gridRects(): Rect[];
}
