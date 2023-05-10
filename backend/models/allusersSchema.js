const mongoose = require( 'mongoose' )


const userSchema = new mongoose.Schema( {
    userName: { type: String, required: false },
    pw: { type: String, required: false },
} )

const User = mongoose.model( 'User', userSchema )

module.exports = User;