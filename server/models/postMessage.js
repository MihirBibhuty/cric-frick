import mongoose from 'mongoose';

// const postSchema = mongoose.Schema({
//     title: String,
//     message: String,
//     name: String,
//     creator: String,
//     tags: [String],
//     selectedFile: String,
//     likes: { type: [String], default: [] },
//     comments: { type: [String], default: [] },
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     },
// })

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    team1Name: String,
    team2Name: String,
    team1Img: String,
    team2Img: String,
    team1Votes: { type: [String], default: [] },
    team2Votes: { type: [String], default: [] },
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('MatchPredictions', postSchema);

export default PostMessage;