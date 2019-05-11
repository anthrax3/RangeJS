export declare type Range = {
    from: number;
    to: number;
};
export declare function intersection(a: Range[], b: Range[], overlap?: number): Range[];
export declare function union(ranges: Range[], overlap?: number): Range[];
