const express = require( 'express' );
const mongoose = require( 'mongoose' );
const http = require( 'http' );
const helmet = require( 'helmet' );
const compression = require( 'compression' );
const cors = require( 'cors' );

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
app.use( '/', require( './routes/acceptDocRoute' ) );
app.use( '/', require( './routes/userRoute' ) );


mongoose.connect( "mongodb+srv://moamenwady:121212m@cluster0.iumas.mongodb.net/pharaohs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).catch( err => {
    console.log( err )
} ).then(
    app.listen( 3005, console.log( "ok" ) ),
    app.get( '/', ( req, res ) => { res.send( 'ok' ) } )
)


