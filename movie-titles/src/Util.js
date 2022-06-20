// create unique array of all years available in data

const createUniqueYearSet = (array) => {
  let yearSet = new Set();
  for (let m of array) {
    yearSet.add(m.releaseYear);
  }

  return Array.from(yearSet).sort((a, b) => a - b);
};

const sampleTestData = [
  {
    title: "Wolf Creek",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
  {
    title: "No Activity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "Billions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
        width: 720,
        height: 1080,
      },
    },
    releaseYear: 2016,
  },
  {
    title: "Better Call Saul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "Younger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/143/24/14324-PosterArt-a0168953a3b93681dbd60c7bcc50a0af.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "The Review With Forrest MacNeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/126/88/12688-PosterArt-e8b36ef2902246538b9bbfdc380e5a3a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2014,
  },
  {
    title: "I Am Legend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/375/797/375797-PosterArt-f456379f7c61bcd9c8f9fc781f4bce28.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2008,
  },
  {
    title: "At Home With Julia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/120/28/12028-PosterArt-0c087d1f4f12d21cda838f53cba2c8a5.jpg",
        width: 720,
        height: 1080,
      },
    },
    releaseYear: 0,
  },
  {
    title: "American Dreams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/971/6/9716-PosterArt-d7983da60a5d146f87f0bf5b4939727a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2002,
  },
  {
    title: "How To Train Your Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-PosterArt-c47d98ddca64ef18cf79c78d6ab8b3ad.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2010,
  },
  {
    title: "Star Trek: Enterprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/120/02/12002-PosterArt-90648d08f69e94d44d6cb4de2cdda757.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 0,
  },
  {
    title: "Ages Of Love",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/372/670/372670-PosterArt-0c1d61510fdf59ff32299038e669db44.jpg",
        width: 350,
        height: 525,
      },
    },
    releaseYear: 2010,
  },
  {
    title: "Prisoners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/408/331/408331-PosterArt-75cb706fded100b4f28cc6b1a007fc1c.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2013,
  },
  {
    title: "Almost Royal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/124/27/12427-PosterArt-92cd41fc035a71a5e5f6cc7569b4266e.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2014,
  },
  {
    title: "Danny Collins",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/999/667/999667-PosterArt-65e6f88ede8bdcdad6d4d4f1549936ee.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2014,
  },
  {
    title: "The Wrong Mans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/124/31/12431-PosterArt-f7d91329c70a7fa206e838423caa31bd.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2013,
  },
  {
    title: "Ernest & Celestine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/928/838/928838-PosterArt-c3d8ac708b712062e519a3b106469595.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2014,
  },
  {
    title: "Star Trek: Deep Space Nine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/160/3/1603-PosterArt-53b8c03e1244053c1c58905dd6738e24.jpg",
        width: 1001,
        height: 1501,
      },
    },
    releaseYear: 1993,
  },
  {
    title: "Valiant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/885/233/885233-PosterArt-e79ac1b3fbb5f8677094f5ae8adca301.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2005,
  },
  {
    title: "The LA Complex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/115/38/11538-PosterArt-3fa112d2e653653fcfc9fe39b34ae1df.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2012,
  },
  {
    title: "Hannibal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/109/1/1091-PosterArt-bbcf03acc18eebfc343754b05f39738f.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2013,
  },
  {
    title: "The Voices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/103/5938/1035938-PosterArt-4131ef088343f85d686806f2b80253c1.jpg",
        width: 1400,
        height: 2100,
      },
    },
    releaseYear: 2013,
  },
  {
    title: "Sex and the City 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/328/010/092e34afe0648a42cf12beb2d7557a65.jpg",
        width: 500,
        height: 750,
      },
    },
    releaseYear: 2009,
  },
  {
    title: "Nasty Baby",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/110/1174/1101174-PosterArt-c1fe5d416b9e410b8726893272e8711a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "Tracers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/958/724/958724-PosterArt-28f056d80c744f0ca9418250db9e4c61.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "The Shield",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/109/8/1098-PosterArt-5f2fbc7f02c02a525ab9f3e95008f3fc.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2002,
  },
  {
    title: "The Review With Forrest MacNeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/126/88/12688-PosterArt-e8b36ef2902246538b9bbfdc380e5a3a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2014,
  },
  {
    title: "I Am Legend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/375/797/375797-PosterArt-f456379f7c61bcd9c8f9fc781f4bce28.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2008,
  },
  {
    title: "At Home With Julia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/120/28/12028-PosterArt-0c087d1f4f12d21cda838f53cba2c8a5.jpg",
        width: 720,
        height: 1080,
      },
    },
    releaseYear: 0,
  },
  {
    title: "American Dreams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/971/6/9716-PosterArt-d7983da60a5d146f87f0bf5b4939727a.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2002,
  },
  {
    title: "How To Train Your Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-PosterArt-c47d98ddca64ef18cf79c78d6ab8b3ad.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2010,
  },
  {
    title: "Star Trek: Enterprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/120/02/12002-PosterArt-90648d08f69e94d44d6cb4de2cdda757.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 0,
  },
];

export { createUniqueYearSet, sampleTestData };
