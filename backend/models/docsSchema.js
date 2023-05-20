const mongoose = require( 'mongoose' )

const docSchema = new mongoose.Schema( {
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    pw: { type: String, required: true },
    type: { type: String, required: true },
} )

const Doc = mongoose.model( 'Doc', docSchema )

module.exports = Doc;