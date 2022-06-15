// create unique array of all years available in data
const createUniqueYearSet = (array) => {
  let yearSet = new Set();
  for (let m of array) {
    yearSet.add(m.releaseYear);
  }

  return Array.from(yearSet).sort((a, b) => a - b);
};

export { createUniqueYearSet };
