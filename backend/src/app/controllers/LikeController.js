import Media from '../schemas/Media';

class LikeController {
  async store(req, res) {
    const media = await Media.findById(req.params.id);

    media.set({ likes: media.likes + 1 });

    await media.save();

    // req.io.emit('like', media);

    return res.json(media);
  }
}

export default new LikeController();
