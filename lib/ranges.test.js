"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ranges = require("./ranges");
test("basic", function () {
    var r = [{ from: 1, to: 2 }, { from: 2, to: 3 }];
    var res = ranges.union(r);
    expect(res.length === 1);
});
