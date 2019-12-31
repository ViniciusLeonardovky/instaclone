// import Party from '../schemas/Party';

class CommentController {
  async index(req, res) {
    return res.status(200).json({ message: 'ok' });
  }

  async store(req, res) {
    return res.status(200).json({ message: 'final' });
  }
}

export default new CommentController();
