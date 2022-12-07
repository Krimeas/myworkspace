const {Schema, model } = require('mongoose');

// task name, task description(maybe later), project
const taskSchema = new Schema(
{

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
    ]
}
)

const Task = model('Task', taskSchema);

module.exports = Task;
