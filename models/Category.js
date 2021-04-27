const { model, Schema } = require('mongoose')

const CategorySchema = new Schema({
    title: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    assignedTo: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    project: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('category', CategorySchema)