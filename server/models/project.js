const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//project_name, project_description, owner, members, tasks, comments, due_date

const projectSchema = new Schema({
    project_name: {
        type: String,
        required: true,
        //maybe make unique
    },
    project_description: {
        type: String,
        required: true,
        maxlength: 300
    },
    owner: [
        {
            type: Schema.Type.ObjectId,
            ref: 'User'
        },
    ],
    members: [
        {
            type: Schema.Type.ObjectId,
            ref: 'User'
        }
    ],
    tasks: [
        {
            type: Schema.Type.ObjectId,
            ref: 'Task'
        }
    ],
    comments: [
        {
            type: Schema.Type.ObjectId,
            ref: 'Comment'
        }
    ],
    due_date: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp)
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;