# Movie listing app

This app renders some movies and series.

Access the live link [here](https://objectstorage.ap-singapore-1.oraclecloud.com/n/axmcit0hitw1/b/movie-listing/o/index.html#/).

# Timeline

1 week

# Technical consideration

- First consider the component folder layout, so that we could reuse the components later
- Mobile responsive - a movie streaming app should allows streaming on mobiles

## Tech stack

- React - easy to build scaleable and dynamic website
- Bootstrap 5 - used building components for fast deployment
- Cypress - used for e2e testing
- what about unit test?

# Deployment

The deployment is done on Oracle cloud DB.

# Areas to improve

- Did not refactor movies and series page
- Search by name and filter by year - does not return query by combined these parameters
- Landing page carousel could display the top most watched movies, if given a server to track users' views

# Bonus points

- done unit tests
- used custom hooks
- use statement tools - useContext; did not use Redux as useContext is easier to use for such a small app
- the app is fully implemented using ES6 and functional components
- used 3rd party libary Boostrap 5, did consider Material UI but there is no use case in this small app

# If given more time

- Use continuous integration tools such as Travis CI/Jenkins

unable to retrieve public API

- removed unnessary files and img from create-react-app
