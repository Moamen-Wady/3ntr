const express = require( 'express' );
const router = express.Router();
const User = require( '../models/allusersSchema' );
const mongoose = require( 'mongoose' );
router.route( '/signin' )
router.post( '/signin', async ( req, res ) => {
    var userName = req.body.userName
    var pw = req.body.pw

    var currentUser = ( await User.find( { userName: userName } ) )
    var currentUserfn = ( currentUser[ 0 ].fullName )
    var currentUsertp = ( currentUser[ 0 ].type )
    function response() {
    console.log( currentUser[ 0 ] )
    console.log( currentUserfn )
    console.log( currentUsertp )
        console.log( currentUser[ 0 ].pw )
        console.log( pw )
        switch ( currentUser[ 0 ].pw ) {
            case pw: {
                res.send( {
                    x: true,
                    user: {
                        fname: currentUserfn,
                        type: currentUsertp
                    }
                } );
            }
                break;
            case !pw: {
                res.send( { x: false } )
            }
                break;
        }
    }
    function isUser() {
        switch ( currentUser ) {
            case undefined: {
                res.send( { x: false } )
            };
                break;
            case []: {
                res.send( { x: false } )
            };
                break;
            default: { response() }
                break;
        }
    }
    isUser();
}
);


module.exports = router;