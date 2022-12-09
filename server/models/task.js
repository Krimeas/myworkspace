const {Schema, model } = require('mongoose');

// task name, task description(maybe later), project
const taskSchema = new Schema(
{
    username:
    {
        type: String,
        required: true,
    },

    taskName:
    {
        type: String,
        required: true,
        maxlength: 200
    },

    project: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],

    // open, in progess, completed

    isOpen: {
        type: Boolean,
        default: true
    },

    isInProgress: {
        type: Boolean,
        default: false
    },

    isComplete: {
        type: Boolean,
        default: false
    },

},
{
    timestamps: true
}
)

const Task = model('Task', taskSchema);

module.exports = Task;
