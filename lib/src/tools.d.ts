export declare function createUuid(): string;
/**
 * 判断图形是否符合嵌套关系, 业务需求：只需要判断shape2所有的点是否都在shape1内部即可
 * @param shape1 参数1
 * @param shape2 参数2
 * @reutrn Boolean 符合条件返回true 否则返回false
 */
export declare function isNested(shape1: any, shape2: any): boolean;
/**
 * 深拷贝函数
 */
export declare function deepClone<T>(obj: T, hash?: WeakMap<object, any>): T;
/**
 * 判断两个对象的某些keys是否相等
 */
export declare function deepEqual(obj1: any, obj2: any, keysToCompare?: string[]): boolean;
