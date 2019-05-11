export type Range = {
    from: number;
    to: number;
};

function intersect(x: Range, y: Range): Range | null {
    if (
        (x.from <= y.from && x.to >= y.from) ||
        (y.from <= x.from && y.to >= x.from)
    ) {
        return {
            from: Math.max(x.from, y.from),
            to: Math.min(x.to, y.to)
        };
    }
    return null;
}

function normalize(a: Range[] | Range) : Range[] {
    return Array.isArray(a) ? a : [a];
}

export function intersection(a: Range[] | Range, b: Range[] | Range, overlap: number = 0) : Range[] {
    a = normalize(a);
    b = normalize(b);
    a = union(a, overlap);
    b = union(b, overlap);
    const c: Range[] = [];

    // a  ###   ###   #########
    // b ###########        #####
    //
    // r  ###   ###         ###
    for (const x of a) {
        for (const y of b) {
            const intersection = intersect(x,y);
            if (intersection){
                c.push(intersection);
            }
        }
    }

    return c;
}

export function union(ranges: Range[], overlap: number = 0): Range[] {
    const result: Range[] = [];
    let last: Range | null = null;

    for (const r of ranges) {
        if (!last || r.from > last.to + overlap) {
            // +overlap to merge spans next to each other
            result.push((last = r));
        } else if (r.to > last.to) {
            last.to = r.to;
        }
    }

    return result;
}
