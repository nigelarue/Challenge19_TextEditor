# Challenge19_TextEditor - J.A.T.E

J.A.T.E is a text editor progressive web app (PWA) that will work in supported browsers for writing JavaScript.

## Installation

Follow the link and press the [install button](https://dry-journey-48231.herokuapp.com/) to install the package manager.

## Usage

Install webpack and webpack-cli as devDependencies in your project:
```md 
npm install webpack webpack-cli --save-dev
```
Create a webpack configuration file named webpack.config.js in the root directory of your project.

Finally, run the webpack script to bundle your app:
```md
npm run build
```
* Scripts are in the root & client directory's `package.json`.

* `npm run build` script and start the server.

* `cd server nodemon server.js --ignore client` server script changes the current working directory to "server" using the `cd` command and starts the development server using `modemon`, which reloads the server when changes are made to the code, and runs the "server.js" with the `nodemon` command, while `--ignore` starts just the server and ignores the "client" directory even if changes are made.

* `cd client && npm run build` changes the current working directory to "client" using the `cd` command and runs the webpack build script in the client directory.

* `cd server && npm i && cd ../client && npm i` script changes the current working directory to "server" using the `cd` command and installs the dependencies for the "server" directory with the `npm i` command and then does the same for "client" directory.

* The web application can be installed from the web address provided by Heroku.

* The web application is deployed using Heroku.

---

## SMU Challenge Provided User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## SMU Challenge Provided Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Contributing

Please see provided starter code from [SMU BOOTCAMP](https://github.com/coding-boot-camp/cautious-meme) & referenced materials in 19-PWA student Mini Project.

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.



## License

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.