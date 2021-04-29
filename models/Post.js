const { model, Schema } = require('mongoose')

const PostSchema = new Schema({
    isArchived: Boolean,
    title: String,
    belongsToCategory: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    description: String,
    assignedTo: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    viewers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    dueDate: Date,
    images: [String],
    labels: [{
        color: String,
        name: String
    }],
    activity: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        details: String,
        time: Date
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    belongsToTeam: {
        type: Schema.Types.ObjectId,
        ref: 'team'
    },
    belongsToProject: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('post', PostSchema)