const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Doc = require( '../models/docsSchema' );
const User = require( '../models/allusersSchema' );
const DocRequests = require( '../models/docRequestsSchema' );

router.route( '/addd' )


router.post( '/addd/:id', async ( req, res ) => {
    var ur = req.params.id
    console.log( ur );

    var reqd = ( await DocRequests.find( { userName: ur } ) )[ 0 ]

    console.log( reqd );

    var thisDoc = new Doc( {
        userName: reqd.userName,
        fullName: reqd.fullName,
        type: "Doc",
        pw: reqd.pw
    } )
    var thisUser = new User( {
        userName: reqd.userName,
        fullName: reqd.fullName,
        type: "Doc",
        pw: reqd.pw
    } )
    thisDoc.save();
    thisUser.save();

    res.send( {} );

}
);

module.exports = router;