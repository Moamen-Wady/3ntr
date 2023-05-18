const express = require( 'express' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const Pat = require( '../models/patSchema' );
const User = require( '../models/allusersSchema' );
const Doc = require( '../models/docsSchema' );
router.route( '/user' );

router.get( '/user/', async ( req, res ) => {
    var isUser = ( await User.find() )
    res.send( isUser )
}
);

router.delete( '/user/:id', async ( req, res ) => {

    var userName = req.params.id
    var delPat = ( await Pat.findOneAndDelete( { userName: userName } ) )
    var delDoc = ( await Doc.findOneAndDelete( { userName: userName } ) )
    var delUser = ( await User.findOneAndDelete( { userName: userName } ) )

    res.send()
}
)

module.exports = router;