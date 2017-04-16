// load environnement variables
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';//output useful logs in the console

// We gotta import our models and routes
import { getOneQuery, getMixedQuery } from './src/AppRoutes';

const app = express(); // Our express server!
const port = process.env.PORT || 8080;

// DB connection through Mongoose
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; // Just a bunch of options for the db connection
mongoose.Promise = global.Promise;
// Don't forget to substitute it with your connection string
mongoose.connect('mongodb://test:test@ds021761.mlab.com:21761/query-builder', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/public'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API routes
app.route('/simple-query')
  .post(getOneQuery)
app.route('/mixed-query')
  .post(getMixedQuery)

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
