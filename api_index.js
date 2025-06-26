module.exports = (req, res) => {
  fetch('https://your-glitch-project.glitch.me')
    .then(response => response.text())
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error.toString()));
};