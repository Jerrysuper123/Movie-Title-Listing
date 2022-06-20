# Movie listing app

This app renders some movies and series, completed within one week.

- Deployed on Oracle Cloud Port 80, access the live link [here](http://138.2.69.2/#/).
- DNS not deployed yet (might try Oralce Dynamic DNS if more time is given)

# Major Consideration

## Project planning

- Consider reusable components vs. pages
- Given short timeline, should deploy the app in the middle of the week

## Tech stack

- React
- Bootstrap 5 - get rid of the cross-browser compatibility issues
- Fontawesome - for all the icons
- Cypress - e2e
- Jest - unit testing

## User experience consideration

- Mobile responsive - this app should allow app streaming on mobiles
- Pagination - to improve loading speed
- Added Search bar and filter year functions
- Added carousell to entice viewers with a call to action to sign up
- Expanded the usage of the navbar to include more navigation links
- Added "scrollup to top" buttons

# Areas to improve

- Movies and Series page can be refactored further; in fact, they can stand alone as a reusable component instead of page
- Unit and E2E testing codes can be refactored further

# Bonus points

- Completed 80% unit tests
- Created custom hooks
- Use useContext as state management tool (Redux a bit bulky for the small app)
- Fully implemented using ES6 and functional components
