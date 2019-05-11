import * as ranges from "./ranges";

test("Union two consecutive ranges results in a single range", () => {
  const r: ranges.Range[] = [{ from: 1, to: 2 }, { from: 2, to: 3 }];
  const res = ranges.union(r);

  expect(res.length === 1);
  const first = res[0];
  expect(first.from === 1);
  expect(first.to === 3);
});

test("Intersecting two overlapping ranges results in a single range", () => {
  const r1: ranges.Range[] = [{ from: 1, to: 4 }];
  const r2: ranges.Range[] = [{ from: 2, to: 3 }];
  const res = ranges.intersection(r1, r2);

  expect(res.length === 1);
  const first = res[0];
  expect(first.from === 1);
  expect(first.to === 3);
});

test("Intersecting two overlapping single ranges results in a single range", () => {
  const r1: ranges.Range = { from: 1, to: 4 };
  const r2: ranges.Range = { from: 2, to: 3 };
  const res = ranges.intersection(r1, r2);

  expect(res.length === 1);
  const first = res[0];
  expect(first.from === 1);
  expect(first.to === 3);
});
