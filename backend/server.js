import express from "express";
import cors from "cors";

const app = express();
const profiles = [];


app.use(cors());
app.use(express.json());

app.post("/api/profile/createUsername", (req, res) => {
  const username = req.body.username;

  profiles.push(username);
  console.log("Username gespeichert:", username);

  res.json({ success: true });
});

app.post("/api/profile/create/addPicture", (req, res) => {
  const profilePicture = req.body.profilePicture;

  profiles.push(profilePicture);
  console.log("Username gespeichert:", profilePicture);

  res.json({ success: true });
});


app.listen(5000, () => {
  console.log("Server läuft auf Port 5000");
});
