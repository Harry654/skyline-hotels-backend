const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        requried: true,
    }
});

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(username, password){
    const user = await this.findOne({username});
    if (user){
        const auth = await bcrypt.compare(password, user.password);

        if (auth){ 
            return user;
        }
        throw Error ('incorrect password');
    }

    throw Error ('incorrect username')
}

module.exports = model("User", userSchema);