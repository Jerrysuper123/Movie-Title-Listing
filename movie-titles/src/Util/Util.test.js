import { fetchAllShows } from "./Util";
import renderer from "react-test-renderer";

const sampleData = [
  {
    title: "U2: Live in Paris",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/963/194/963194-PosterArt-9d1f4f28bb94e5e0f06e83d1216a8e30.jpg",
        width: 559,
        height: 828,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "Under The Gun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://streamcoimg-a.akamaihd.net/000/115/3873/1153873-PosterArt-93b3333a696042bf7da06b874af771d8.jpg",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
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
];

test("properly fiter series or movies", () => {
  expect(fetchAllShows(sampleData, "movies").length.toBe(2));
});
