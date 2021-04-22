const { model, Schema } = require('mongoose')

const ProjectSchema = new Schema({
    isPrivate: Boolean,
    title: {
        type: String,
        required: true
    },
    description: String,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    projectOwner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    assignedToTeam: {
        type: Schema.Types.ObjectId,
        ref: 'team'
    },
    assignedToUser: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    viewers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('project', ProjectSchema)