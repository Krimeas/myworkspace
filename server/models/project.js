const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//project_name, project_description, owner, members, tasks, comments, due_date

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        //maybe make unique
    },
    projectDescription: {
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
    dueDate: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp)
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;