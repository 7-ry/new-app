const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    // author: ObjectId,
    username: {
        type: String,
        required: true,
        max: [60, 'Up to 60 letters!']
    },

    email: {
        type: String,
        required: true,
        max: [60, 'Up to 60 letters!'],
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: [6, 'Minimum 6 letters!'],
        max: [30, 'Up to 30 letters!']
    },
});

UserSchema.methods.hasSamePassword = function (inputPassword) {
    const user = this
    return bcrypt.compareSync(inputPassword, user.password)
}

UserSchema.pre('save', function (next) {
    const user = this
    const saltRounds = 10

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash
            next()
        });
    });
})

module.exports = mongoose.model('User', UserSchema)