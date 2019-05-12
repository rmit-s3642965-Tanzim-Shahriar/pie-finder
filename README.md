This project was at first bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
Later on, redux store was added with custom actions, reducers and react-script was removed and replaced with webpack and babel.

### STEPS TO RUN THE APP LOCALLY

`STEP 1:`
Clone the project:<br>
git clone https://github.com/rmit-s3642965-Tanzim-Shahriar/pie-finder.git

`STEP 2:`
Install all the dependencies by:<br>
npm install

`STEP 3:`
To start the project:<br>
npm start



## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [localhost:3011](http://localhost:3011) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the ./public/bundle.min.js<br>
You can access the app after a build by opening ./public/index.html


### `npm run test`

#### `WARNING:` <br>
<br>
MUST uncomment out <br>
//"presets": ["@babel/preset-env","@babel/preset-react"],"plugins": ["@babel/plugin-proposal-class-properties"] <br>
<br>AND comment out <br><br>
"presets": ["env","stage-0","react"],<br><br>
in.babelrc file
to run the tests. TO RUN THE APP AGAIN, undo this.

`npm run test` will run Jest and execute all the tests<br>

### `npm run test -- -u`

#### `WARNING:` <br>
<br>
MUST uncomment out <br>
//"presets": ["@babel/preset-env","@babel/preset-react"],"plugins": ["@babel/plugin-proposal-class-properties"] <br>
<br>AND comment out <br><br>
"presets": ["env","stage-0","react"],<br><br>
in.babelrc file
to run the tests. TO RUN THE APP AGAIN, undo this.

`npm run test` will run Jest and execute all the tests and delete the previous snapshots


### REDUX DEVTOOLS
To add redux devtools to observe state management, install redux devtools chrome extension and uncomment the following line from in src/store.js file

// window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()




### DEPENDENCIES USED

`webpack`: Runs the server<br>
`babel`: Converts jsx and scss to one js file<br>
`sass-loader,node-sass,style-loader`: Loads scss files to webpack<br>
`@material-ui/core`: CircularProgress used for loading circle, Switch used for toggle button, Select used for dropdown,styles used for styling<br>
`react-js-pagination`: Pagination at the bottom of page is made using this<br>
`fast-sort`: Sorts arrays with good benchmark, used to sort stores and pies<br>
`jest`,`enzyme`: Used for testing<br>
`identity-obj-proxy`,`moduleNameMapper`: Used identity-obj-proxy and moduleNameMapper for jest to mock scss files<br>

### ABOUT THIS PROJECT
1. This React App will fetch data from  ​https://pie.now.sh​ 
API and then will store all data to the App's redux store.<br> 
2. App will display information about each store and it's pie of the day.<br>
3. Stores can be sorted by price of the Pie Of The Day, quantity of pies and Rating of store in ascending or descending order<br>
4. List is paginated with 5 stores per page.<br>
5. If API fetch fails, a fail message is showed.<br>
6. Throughout the app most elements are styled using flexboxes to keep mobile view of the app consistent.<p>
7. For testing, snapshots are taken by using enzyme. To run the tests please remember to edit the .babelrc file.<br>

