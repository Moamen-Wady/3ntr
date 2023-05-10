const express = require( 'express' );
const mongoose = require( 'mongoose' );
const cors = require( 'cors' );
const http = require( 'http' );
const helmet = require( 'helmet' );
const compression = require( 'compression' );
const app = express();
app.use( cors( {
    origin: [ 'http://localhost:3000', 'http://localhost:3005' ],
    credentials: true,
    optionSuccessStatus: 200
} ) );
app.use( express.json() );
app.use( helmet() );
app.use( compression() );
app.use( express.urlencoded( { extended: true } ) );
app.use( '/', require( './routes/signinRoute' ) );
app.use( '/', require( './routes/signupDRoute' ) );
app.use( '/', require( './routes/signupPRoute' ) );

const db = mongoose.connect( "mongodb+srv://moamenwady:121212m@cluster0.iumas.mongodb.net/pharaohs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).then( function ( err ) {
    if ( !err ) { console.log( 'connected' ) }
    else { console.log( err ) }
} );
const serverx = http.createServer( app );
serverx.listen( 3005, console.log( "ok" ) );
app.get( "/", ( req, res ) => {
    res.send( 'ok' )
} )