const HomeController = {
  hello(req, res) {
    res.send({ message: 'Hello world!' });
  },
};

module.exports = HomeController;
