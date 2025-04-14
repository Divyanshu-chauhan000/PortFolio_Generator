const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // frontend se request allow krne ke liye
app.use(express.json()); // JSON parsing

app.post('/login-email', (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email);
  res.status(200).json({ message: "Login success" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
