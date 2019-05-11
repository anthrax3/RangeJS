export type Range = {
  from: number;
  to: number;
};

export function intersects(a: Range[], b: Range[]) {
  a = merge(a);
  b = merge(b);
  const c: Range[] = [];

  // a  ###   ###   #########
  // b ###########        #####
  //
  // r  ###   ###         ###
  for (const x of a) {
    for (const y of b) {
      if (
        (x.from <= y.from && x.to >= y.from) ||
        (y.from <= x.from && y.to >= x.from)
      ) {
        const overlap = {
          from: Math.max(x.from, y.from),
          to: Math.min(x.to, y.to)
        };
        c.push(overlap);
      }
    }
  }

  return c;
}

export function merge(ranges: Range[], overlap: number = 0): Range[] {
  const result: Range[] = [];
  let last: Range;

  for (const r of ranges) {
    if (!last || r.from > last.to + overlap) {
      // +overlap to merge spans next to eachother
      result.push((last = r));
    } else if (r.to > last.to) {
      last.to = r.to;
    }
  }

  return result;
}
