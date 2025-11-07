import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

// Route sederhana untuk cek backend
app.get("/", (req, res) => {
  res.json({ message: "Backend Yasa Giriderma aktif 🚀" });
});

// Contoh route kirim pesan (bisa dikembangin)
app.post("/message", (req, res) => {
  const { name, message } = req.body;
  console.log(`Pesan baru dari ${name}: ${message}`);
  res.json({ status: "ok", message: "Pesan diterima!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
