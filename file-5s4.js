const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch(process.env.GLITCH_PROJECT_URL);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};