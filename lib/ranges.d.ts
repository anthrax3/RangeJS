export declare type Range = {
    from: number;
    to: number;
};
export declare function intersects(a: Range[], b: Range[]): Range[];
export declare function merge(ranges: Range[], overlap?: number): Range[];
