import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  author: String,
  description: String,
  name: String,
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [
      {
        author_comment: String,
        content_coment: String,
        created_at: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  size: Number,
  key: String,
  url: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

MediaSchema.pre('save', function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

export default mongoose.model('Media', MediaSchema);
