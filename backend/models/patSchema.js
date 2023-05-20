const mongoose = require( 'mongoose' )


const patSchema = new mongoose.Schema( {
    type: { type: String, required: true },
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    pw: { type: String, required: true },
    nid: { type: String, required: true },
    gender: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    maritalStatus: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    job: { type: String, required: true },
    nationality: { type: String, required: true },
    EHR: {
        type: Object, required: false,
    }
} )

const Pat = mongoose.model( 'Pat', patSchema )

module.exports = Pat;