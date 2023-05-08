const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Doc = require( '../models/docSchema' );
router.route( '/signupd' )

router.post( '/signupd/', async ( req, res, err ) => {
    var userName = req.body.userName
    var fullName = req.body.fullName
    var pw = req.body.pw
    var cv = req.body.cv

    console.log(cv)
    var thisDoc = new Doc( {
        userName: userName,
        fullName: fullName,
        pw: pw
    } )

    function err( err ) {
        if ( !err ) {
            thisDoc.save();
            console.log( thisDoc )
            res.send( { x: true } );
        }
        else {
            console.log( err )
            res.send( { x: false } );
        }
    }
    err();
} );

module.exports = router;