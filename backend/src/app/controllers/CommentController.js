import Media from '../schemas/Media';

class CommentController {
  async index(req, res) {
    const { media_id } = req.params;

    const media = await Media.findById(media_id);

    return res.status(200).json(media.comments);
  }

  async store(req, res) {
    const { author_comment, content_coment } = req.body;
    const { media_id } = req.params;

    const media = await Media.findById(media_id);

    const newComment = { author_comment, content_coment };
    const currentComments = media.comments;

    currentComments.push(newComment);

    await Media.updateOne({
      comments: currentComments,
    })
      .where('_id')
      .equals(media_id);

    // req.io.emit('comment', media);

    return res.status(200).json({ author_comment, content_coment });
  }
}

export default new CommentController();
