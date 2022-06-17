import { createUniqueYearSet } from "./Util";

test("test sample array convert to unique array data asset ", () => {
  const sampleArray = [
    { releaseYear: 2012 },
    { releaseYear: 2012 },
    { releaseYear: 2013 },
  ];
  expect(createUniqueYearSet(sampleArray)).toEqual([2012, 2013]);
});
