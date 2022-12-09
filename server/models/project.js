const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//project_name, project_description, owner, members, tasks, comments, due_date

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        unique:  true
    },
    projectDescription: {
        type: String,
        required: true,
        maxlength: 300
    },
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    dueDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp)
    }
},
{
    timestamps: true
}
);

const Project = model('Project', projectSchema);

module.exports = Project;