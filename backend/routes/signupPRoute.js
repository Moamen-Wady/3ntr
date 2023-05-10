const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Pat = require( '../models/patSchema' );
const User = require( '../models/allusersSchema' );
router.route( '/signupp' )

router.post( '/signupp/', async ( req, res, err ) => {
    var fullName = req.body.fullName
    var userName = req.body.userName
    var pw = req.body.pw
    var nid = req.body.nid
    var gender = req.body.gender
    var age = req.body.age
    var maritalStatus = req.body.maritalStatus
    var address = req.body.address
    var phone = req.body.phone
    var job = req.body.job
    var nationality = req.body.nationality
    var EHR = req.body.EHR

    var thisPat = new Pat( {
        userName: userName,
        fullName: fullName,
        pw: pw,
        nid: nid,
        gender: gender,
        age: age,
        maritalStatus: maritalStatus,
        address: address,
        phone: phone,
        job: job,
        nationality: nationality,
        EHR: EHR
    } )
    var thisUser = new User( {
        userName: userName,
        pw: pw,
    } )

    function err( err ) {
        if ( !err ) {
            thisPat.save().then( ( er ) => {
                if ( !er ) {
                    console.log( thisPat )
                    thisUser.save();
                    res.send( { x: true } );
                }
                else {
                    console.log( er );
                    res.send( { x: "non-unique username" } )
                }
            } );
        }
        else {
            console.log( err )
            res.send( { x: false } );
        }
    }
    err();
} );

module.exports = router;