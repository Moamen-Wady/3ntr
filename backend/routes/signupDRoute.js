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
    var duplicate2 = ( await DocRequests.find( { userName: userName } ) )

    var thisDocRequests = new DocRequests( {
        userName: userName,
        fullName: fullName,
        type: type,
        pw: pw,
        cv: cv
    } )

    function response() {
        if ( ( duplicate[ 0 ] !== undefined ) || ( duplicate2[ 0 ] !== undefined ) ) {
            res.send( { x: false } );
            console.log( 'not unique' )
            console.log( duplicate[ 0 ] )
        }
        else {
            res.send( {
                x: true
            } );
            thisDocRequests.save();
            console.log( thisDocRequests )
        }
    }
    response();
} );

router.get( '/signupd/', async ( req, res ) => {
    var rs = ( await DocRequests.find() )
    res.send( rs )
}
);
router.delete( '/signupd/:id', async ( req, res ) => {
    var id = req.params.id
    await DocRequests.deleteOne( { userName: id } ).catch( err => { console.log( err ) } )
    res.send( "done" )
}
);


module.exports = router;