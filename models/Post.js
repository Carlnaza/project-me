const { model, Schema } = require('mongoose')

const PostSchema = new Schema({
    isArchived: Boolean,
    title: String,
    category: {
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
        details: String
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
        type: schema.Types.ObjectId,
        ref: 'project'
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('post', PostSchema)