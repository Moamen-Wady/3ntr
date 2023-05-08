const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Pat = require( '../models/patSchema' );
router.route( '/signupp' )

router.post( '/signupp/', async ( req, res, err ) => {
    var userName = req.body.userName
    var fullName = req.body.fullName
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
    function err(err){
    if ( !err ) {
        thisPat.save();
        console.log( thisPat )
        res.send( { x: true } );
    }
    else {
        console.log(err)
        res.send( { x: false } );
        }
    }
    err();
} );

module.exports = router;