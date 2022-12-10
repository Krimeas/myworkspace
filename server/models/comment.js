const { Schema, model} = require('mongoose');

// Author, User Recipient, Project Recipient, commentText 
const commentSchema = new Schema(
    {
        username:
        {
            type: String,
            required: true,
        },

        commentText:
        {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 500
        },

        userRecipient:
            
                {
                    type: String,
                },

        projectRecipient:
            
                {
                    type: String,
                }

    },
    {
        timestamps: true
    }
)


const Comment = model('Comment', commentSchema);
module.exports = Comment;