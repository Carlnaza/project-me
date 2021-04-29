const { model, Schema } = require('mongoose')

const CommentSchema = new Schema({
    title: String,
    comment: String,
    images: [String],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('comment', CommentSchema)