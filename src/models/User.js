const { instances } = require('gstore-node');

const gstore = instances.get('default')
const { Schema } = gstore;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, validate: 'isEmail', required: true },
    dateOfBirth: { type: Date },
    createdOn: { type: Date, default: gstore.defaultValues.NOW },
    updatedOn: { type: Date }
});

module.exports = gstore.model('User', userSchema)
