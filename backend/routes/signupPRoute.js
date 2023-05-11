const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Pat = require( '../models/patSchema' );
const User = require( '../models/allusersSchema' );
router.route( '/signupp' )

router.post( '/signupp/', async ( req, res ) => {
    var fullName = req.body.fullName
    var userName = req.body.userName
    var pw = req.body.pw
    var nid = req.body.nid
    var type = req.body.type
    var gender = req.body.gender
    var age = req.body.age
    var maritalStatus = req.body.maritalStatus
    var address = req.body.address
    var phone = req.body.phone
    var job = req.body.job
    var nationality = req.body.nationality
    var EHR = req.body.EHR
    var duplicate = ( await User.find( { userName: userName } ) )
    console.log( duplicate )

    var thisPat = new Pat( {
        userName: userName,
        fullName: fullName,
        type: type,
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
        type: type,
        userName: userName,
        fullName: fullName,
        pw: pw
    } )



    function response() {
        if ( duplicate[ 0 ] !== undefined ) {
            res.send( { x: false } );
            console.log( 'not unique' )
        }
        else {
            res.send( {
                x: true,
                user: {
                    type: "Patient",
                    fname: fullName
                }
            } );
            thisUser.save();
            thisPat.save();
            console.log( thisPat )
        }
    }
    response();


} );

module.exports = router;