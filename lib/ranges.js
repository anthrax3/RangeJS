"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function intersects(a, b) {
    a = merge(a);
    b = merge(b);
    var c = [];
    // a  ###   ###   #########
    // b ###########        #####
    //
    // r  ###   ###         ###
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var x = a_1[_i];
        for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
            var y = b_1[_a];
            if ((x.from <= y.from && x.to >= y.from) ||
                (y.from <= x.from && y.to >= x.from)) {
                var overlap = {
                    from: Math.max(x.from, y.from),
                    to: Math.min(x.to, y.to)
                };
                c.push(overlap);
            }
        }
    }
    return c;
}
exports.intersects = intersects;
function merge(ranges, overlap) {
    if (overlap === void 0) { overlap = 0; }
    var result = [];
    var last;
    for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
        var r = ranges_1[_i];
        if (!last || r.from > last.to + overlap) {
            // +overlap to merge spans next to eachother
            result.push((last = r));
        }
        else if (r.to > last.to) {
            last.to = r.to;
        }
    }
    return result;
}
exports.merge = merge;