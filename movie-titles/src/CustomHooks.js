import { useEffect, useState } from "react";

const useLoadSpinner = (initialState) => {
  const [loading, setLoading] = useState(initialState);

  useEffect(() => {
    setLoading(false);
  }, []);
  return [loading, setLoading];
};

const useLoadAndStoreShows = (shows) => {
  const [allShows, setAllShows] = useState([]);

  useEffect(() => {
    setAllShows(shows);
  }, [shows]);

  return [allShows, setAllShows];
};

const usePaginationItemCount = (initialState, allShows) => {
  const [allItems, setTotalItems] = useState(initialState);

  const addMoreItems = () => {
    let totalItems = allItems + 21;
    if (totalItems > allShows.length) {
      totalItems = allShows.length;
    }
    setTotalItems(totalItems);
  };

  return [allItems, addMoreItems];
};

const useDisplayItemsOnPagination = (allShows, allItems) => {
  const [displayShows, setDisplayShows] = useState([]);

  useEffect(() => {
    let clone = allShows.slice(0, allItems);
    setDisplayShows(clone);
  }, [allShows, allItems]);

  return [displayShows, setDisplayShows];
};

export {
  useLoadSpinner,
  useLoadAndStoreShows,
  usePaginationItemCount,
  useDisplayItemsOnPagination,
};
