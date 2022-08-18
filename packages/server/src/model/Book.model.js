const mongoose = require('mongoose');
const { TagSchema } = require('./Tag.model')

const BookSchema = new mongoose.Schema({
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
    type: String
  },
  corver: {
    type: String
  },
})

const Book = mongoose.model('book', BookSchema)
module.exports = Book;
