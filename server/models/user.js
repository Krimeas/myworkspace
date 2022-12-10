const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


// Username, Email, Password, First Name, Last Name, About Me, Profile Picture, Friends, Projects, Comments, 

const userSchema = new Schema(
    {
        username: 
        {
            type: String,
            required: true,
            unique: true
        },

        email:
        {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },

        password:
        {
            type: String,
            required: true,
            minlength: 8,
            // add special characters if time
        },

        firstName:

        {
            type: String,
            required: true
        },

        lastName:

        {
            type: String,
            required: true
        },

        aboutMe:

        {
            type: String,
            required: false,
            maxlength: 250,
        },

        profilePicture:

        {
            type: String,
            required: false
        },

        coworkers:
        [
            {
                type: String
            }
        ],

        projects:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "Project",
            }
        ],

        comments:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            }
        ],

        //maybe add tasks
    }
);

// Add friends counter if time
userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified(password)) {
        const salt = 10;
        this.password = await bcrypt.hash(this.password, salt);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;