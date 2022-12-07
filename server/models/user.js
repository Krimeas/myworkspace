const { Schema, model, Types } = require('mongoose');
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

        firstname:

        {
            type: String,
            required: true
        },

        lastname:

        {
            type: String,
            required: true
        },

        aboutme:

        {
            type: String,
            required: false,
            maxlength: 250,
        },

        profilepicture:

        {
            type: String,
            required: false
        },

        friends:
        [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
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
    }
)

// Add friends counter if time

const User = model('User', UserSchema);
module.exports = User;