const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const DocRequests = require( '../models/docRequestsSchema' );
const User = require( '../models/allusersSchema' );
router.route( '/signupd' )


router.post( '/signupd/', async ( req, res ) => {
    var userName = req.body.userName
    var fullName = req.body.fullName
    var type = req.body.type
    var pw = req.body.pw
    var cv = req.body.cv

    var duplicate = ( await User.find( { userName: userName } ) )
    console.log( duplicate )

    var thisDocRequests = new DocRequests( {
        userName: userName,
        fullName: fullName,
        type: type,
        pw: pw
    } )
    var thisUser = new User( {
        type: type,
        userName: userName,
        fullName: fullName,
        pw: pw
    } )

    function response() {
        if ( duplicate[ 0 ] !== undefined ) {
            res.send( { x: false } );
            console.log( 'not unique' )
            console.log( thisDocRequests )
        }
        else {
            res.send( {
                x: true,
                user: {
                    fname: fullName,
                    type: type
                }
            } );
            thisUser.save();
            thisDocRequests.save();
            console.log( thisDocRequests )
        }
    }
    response();
} );

module.exports = router;