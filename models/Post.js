const { model, Schema } = require('mongoose')

const PostSchema = new Schema({
    isArchived: Boolean,
    title: String,
    category: String,
    description: String,
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
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
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('post', PostSchema)