const { mongoose } = require('mongoose');
const { TagSchema } = require('./Tag.model')

const { Schema } = mongoose;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subName: {
    type: String,
  },
  description: {
    type: String
  },
  corver: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  corver: {
    type: String
  },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
})

const Book = mongoose.model('book', BookSchema)
module.exports = Book;
