import Media from '../schemas/Media';

class MediaController {
  async index(req, res) {
    const medias = await Media.find();

    return res.status(200).json(medias);
  }

  async store(req, res) {
    const { author, description } = req.body;

    const {
      originalname: name,
      size,
      filename: key,
      location: url = '',
    } = req.file;

    const media = await Media.create({
      author,
      description,
      name,
      size,
      key,
      url,
    });

    return res.status(200).json(media);
  }
}

export default new MediaController();
