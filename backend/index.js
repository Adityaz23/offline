import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/notifications", (req, res) => {
  res.json({
    network: 4,
    message: 2,
    jobs: 1,
    notification: 3,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
