import Shape from './Shape';
interface MagicPoint {
    coor: [number, number];
    color: string;
}
export default class Mask extends Shape {
    type: number;
    maskType: string;
    maskBase64: string;
    pixels: number[];
    canvasData: ImageData;
    height: number;
    weight: number;
    maskToPolygon: boolean;
    magicPoints: MagicPoint[];
    constructor(item: any, index: number);
}
export {};
