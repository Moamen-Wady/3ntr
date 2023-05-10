const express = require( 'express' );
const router = express.Router();
const User = require( '../models/allusersSchema' );
const mongoose = require( 'mongoose' );
router.route( '/signin' )
router.get( '/signin', async ( req, res ) => {
    const allusers = await ( User.find() );

    console.log( allusers )
    var userName = req.body.userName
    var pw = req.body.pw

    var currentUser = allusers.find( { userName: userName } )
    if ( currentUser.pw == pw ) {
        res.send( { x: true } )
    }
    else {

        res.send( { x: false } )
    }
    const User = ( await Pat.findOne( { userName: userName } ) )
} );


module.exports = router;