export declare type Range = {
    from: number;
    to: number;
};
export declare function intersection(a: Range[] | Range, b: Range[] | Range, overlap?: number): Range[];
export declare function union(ranges: Range[], overlap?: number): Range[];
