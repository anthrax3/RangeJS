import * as ranges from "./ranges";

test("basic", () => {
  const r: ranges.Range[] = [{ from: 1, to: 2 }, { from: 2, to: 3 }];

  const res = ranges.union(r);
  expect(res.length === 1);
});
