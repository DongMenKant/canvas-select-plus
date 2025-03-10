interface ShapeProp {
    type: number;
    [key: string]: any;
}
export default class Shape {
    /** 标签id */
    tagId: string;
    /** 标签名称 */
    label: string;
    /** 是否隐藏标签 */
    hideLabel: boolean;
    /** 是否隐藏标签 */
    truncated: number;
    /** 坐标 */
    coor: any[];
    /** 边线颜色 */
    strokeStyle: string;
    /** 填充颜色 */
    fillStyle: string;
    /** 边线宽度 */
    lineWidth: number;
    /** 标签填充颜色 */
    labelFillStyle: string;
    /** 标签文字颜色 */
    textFillStyle: string;
    /** 标签文字字体 */
    labelFont: string;
    /** 标签文字字型 */
    labelFontFamily: string;
    /** 标签文字字号 */
    labelFontSize: number;
    /** 1 矩形，2 多边形，3 点，4 折线，5 圆，6 网格 */
    type: number;
    /** 当前是否处于活动状态 */
    active: boolean;
    /** 当前是否处于创建状态 */
    creating: boolean;
    /** 当前是否处于拖拽状态 */
    dragging: boolean;
    /** 当前是否处于隐藏状态 */
    hiddening: boolean;
    /** 当前是否处于锁定状态 */
    locking: boolean;
    /** 索引 */
    index: number;
    /** 唯一标识 */
    uuid: string;
    /** 向上展示label */
    labelUp: boolean;
    constructor(item: ShapeProp, index: number);
}
export {};
