const mongoose = require( 'mongoose' )

const docRequestsSchema = new mongoose.Schema( {
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    pw: { type: String, required: true },
    cv: { type: String, required: true },
    type: { type: String, required: true },
} )

const DocRequests = mongoose.model( 'DocRequests', docRequestsSchema )

module.exports = DocRequests;