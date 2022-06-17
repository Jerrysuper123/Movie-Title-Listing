# Movie listing app

This app renders some movies and series.

- Deployed on Oracle Cloud Port 80, access the live link [here](http://138.2.69.2/#/).
- DNS not deployed yet

# Timeline

1 week

# Consideration

- First consider the component folder layout, so that we could reuse the components later
- Mobile responsive - a movie streaming app should allows streaming on mobiles
- add paginationt to improve loading speed
- added search name and filter by name to improve user exp
- added carousell to entice viewers with a call to action to sign up
- expanded the usage of the navbar to include other pages, also fixed the navbar so that it follows users whereever it goes
- added scrollup top buttons as the list gets longer for better user experience

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
- used statement tools - useContext; did not use Redux as useContext is easier to use for such a small app
- the app is fully implemented using ES6 and functional components
- used 3rd party libary Boostrap 5, did consider Material UI but there is no use case in this small app

# If given more time

- Use continuous integration tools such as Travis CI/Jenkins
- DNS deployed
- Create more custom hooks, test cusom hooks, unit test on all component
