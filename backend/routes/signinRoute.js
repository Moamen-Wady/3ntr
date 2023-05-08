const express = require( 'express' );
const router = express.Router();
const Pat = require( '../models/patSchema' );
const mongoose = require( 'mongoose' );
router.route( '/pats' )
router.get( '/pats', async ( req, res ) => {
    const allpats = await ( Pat.find() );
    res.send( allpats );
} );
router.get( '/pats/:id', async ( req, res ) => {
    const thisSeat = await ( Pat.findOne( { xd: req.params.id } ) );
    res.send( thisSeat );
} );


module.exports = router;