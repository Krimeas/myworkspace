const { Schema, model, Types } = require('mongoose');

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
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User'

                }
            ],

        projectRecipient:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Project'
                }
            ]

    },
    {
        timestamps: true
    }
)


const Comment = model('Comment', commentSchema);
module.exports = Thought;