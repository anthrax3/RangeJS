"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ranges = require("./ranges");
test("Union two consecutive ranges results in a single range", function () {
    var r = [{ from: 1, to: 2 }, { from: 2, to: 3 }];
    var res = ranges.union(r);
    expect(res.length === 1);
    var first = res[0];
    expect(first.from === 1);
    expect(first.to === 3);
});
test("Intersecting two overlapping ranges results in a single range", function () {
    var r1 = [{ from: 1, to: 4 }];
    var r2 = [{ from: 2, to: 3 }];
    var res = ranges.intersection(r1, r2);
    expect(res.length === 1);
    var first = res[0];
    expect(first.from === 1);
    expect(first.to === 3);
});
test("Intersecting two overlapping single ranges results in a single range", function () {
    var r1 = { from: 1, to: 4 };
    var r2 = { from: 2, to: 3 };
    var res = ranges.intersection(r1, r2);
    expect(res.length === 1);
    var first = res[0];
    expect(first.from === 1);
    expect(first.to === 3);
});
