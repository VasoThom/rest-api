import express from "express";
const app = express();

app.listen(4000, () => {
  console.log("welcomeeee....");
});

let notizen = [1, 2, 3];

let users = ["vaso", "ella", "marcel"];
// Notizen lesen (GET)
app.get("/user", (req, res) => {
  res.json(users);
});

app.get("/notizen", (req, res) => {
  res.json(notizen);
});

// neue notize erstellen (POST)
app.post("/notizen", (req, res) => {
  notizen.push(notizen.length + 1);
  res.json("test post");
});

// Notizen aktualisieren/ erstellen (PUT/PATCH)
// PUT : überschreiben des Datensatzes
// PATCH : Bearbeiten des bestehenden Datensatzes

app.put("/notizen", (req, res) => {
  notizen[notizen.length - 1] = notizen[notizen.length - 1] * 2;
  res.json("test put");
});

// Notizen löschen (DELETE)

app.delete("/notizen", (req, res) => {
  arr.pop();

  res.json("test delete");
});

//CRUD create , read und delete
const notiz = {
  create: () => {},
  read: () => {},
  update: () => {},
  delete: () => {},
};
const user = {
  create: () => {},
  read: () => {},
  update: () => {},
  delete: () => {},
};
