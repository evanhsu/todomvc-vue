# todomvc - vue.js edition
This is the todomvc reference app, written with Vue.js.
The Vue.js code is from this repo: https://github.com/tastejs/todomvc/tree/master/examples/vue 

A node backend has been added that exposes GET and PUT api endpoints for the vue app to use (instead of the default localStorage).

## Getting started
This project hasn't yet been integrated into a single node app - it still exists as 2 completely separate projects:
the Vue frontend and the node/express backend.

**Gotcha**: There's 2 `package.json` files! This will be fixed at some point, but you'll still need to deal with it
for now.

This project has been dockerized, so the recommend build process requires Docker (and Docker-compose):

    $ docker-compose up

This should build the project and start the server on port 8080.

You should be able to view the app in your browser at: http://localhost:8080
