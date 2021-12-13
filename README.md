# City Explorer API

**Author**: Andrew Enyeart
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
City Explorer API is a server and API hosted on Heroku [here](https://ae-cityexplorerserver.herokuapp.com) and built in tandem with [City Explorer App](https://github.com/aenyeart/city-explorer) ([deployed on Netlify](https://aenyeart-city-explorer.netlify.app/)) 

## Getting Started
To run this app on your local machine, you will need to obtain your own API keys for the APIs below, and add them to the .sample.env file in the root folder, then change the filename from ".sample.env" to ".env". (Be sure to add ".env" to your .gitignore file.)
- [Weatherbit API](https://www.weatherbit.io/account/create)
- [The Movie Database API](https://www.themoviedb.org/documentation/api)


## Architecture
### Data Flow Diagrams
![Location API Data Flow](./img/cityexp-6-location.jpg?raw=true "Location API Data Flow")
![Express Server Data Flow](./img/cityexp-7-server.jpg?raw=true "Express Server Data Flow")
![Weather & Movies APIs Data Flow](./img/cityexp-8-api.jpg?raw=true "Weather & Movies APIs Data Flow")
![Server Modules Data Flow](./img/cityexp-9-modules.jpg?raw=true "Server Modules Data Flow")
![Cache Data Flow](./img/cityexp-10-cache.jpg?raw=true "Cache Data Flow")



## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->
12-07-2021 6:40pm - Server files initialized
12-07-2021 6:52pm - Basic Express server tested
12-07-2021 9:00pm - /weather endpoint implemented and tested
12-07-2021 10:23pm - Gets specific element from data using .find
12-07-2021 11:44pm - Creates Forecast class
12-08-2021 5:24pm - Server responds to weather query with assembled array of Forecast instances
12-08-2021 6:20pm - Server sends error messages to client
12-09-2021 8:50 am - Adds weatherbit API key to .env
12-09-2021 4:39pm - Refactors to fetch & serve weather data from API
12-09-2021 7:20pm - Fetches movie data from API and serves to client
12-12-2021 7:00pm - Server deployed on Heroku, application on Netlify



## Credit and Collaborations
- Daniel 
- Data flowchart created in collaboration with [Jacob Choi](https://github.com/Choij12)

**Name of feature: Set up server repo**

Estimate of time needed to complete: 1h

Start time: 5:30p

Finish time: 6:40p

Actual time needed to complete: 1h10m

**Name of feature: Weather placeholder data**

Estimate of time needed to complete: 2h

Start time: 6:40p-1:00a, 4:00p-5:20p

Finish time: 5:20p

Actual time needed to complete: 8h

**Name of feature: Errors**

Estimate of time needed to complete: 30m 

Start time: 5:45p

Finish time: 10:30p

Actual time needed to complete: 5h

**Name of feature: Live Weather**

Estimate of time needed to complete: ?

Start time: 2:45p

Finish time: 4:30p

Actual time needed to complete: 2h

**Name of feature: Movie API**

Estimate of time needed to complete: 1h

Start time: 5:00p

Finish time: 

Actual time needed to complete: 

**Name of feature: Modularization**

Estimate of time needed to complete: 30m 

Start time: 8:15a

Finish time: ?

Actual time needed to complete: Unknown