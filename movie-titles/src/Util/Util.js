const fetchAllShows = (sampleData, type) => {
  let showData = sampleData.entries.filter((m) => m.programType === type);
  return showData;
};

export { fetchAllShows };
