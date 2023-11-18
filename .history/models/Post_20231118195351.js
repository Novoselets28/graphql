const {model, Scheme} = require('mongoose');

const postScheme = new Scheme({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Scheme.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = model('Post', postScheme)