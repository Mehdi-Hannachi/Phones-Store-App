const express = require("express");

//Initialize express
const app = express();

app.use(express.json());

//Create PORT

const PORT = 5000;

// Fake Data
let team = [
  { name: "Mehdi", age: 24, id: 1 },
  { name: "Slim", age: 29, id: 2 },
  { name: "Ines", age: 25, id: 3 },
  { name: "Hejer", age: 25, id: 4 },
];

// GET all team
// GET "/api/team"
//@desc : Get all team member

app.get("/api/team", (req, res) => {
  team
    ? res.status(200).json(team)
    : res.status(400).json({ msg: "There is no team member" });
});

// Add new member
// POST "/api/add-member"
// @desc  : Add new team member

app.post("/api/add-member", (req, res) => {
  console.log("req", req.body);

  let newMember = { ...req.body, id: Math.random() };

  try {
    if (JSON.stringify(req.body) === "{}") {
      return res.status(403).json({ msg: "Empty fields" });
    }

    team = [...team, newMember];

    res.status(200).json({ msg: "User added Successfully", team });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Update team member data
// PUT  /api/update-member/:id
//@desc : Update team member data with id

app.put(`/api/update-member/:id`, (req, res) => {
  let id = +req.params.id;

  team = team.map((member) =>
    member.id === id ? { ...member, ...req.body } : member
  );
  res
    .status(200)
    .json({ msg: "Member team has been updated successfully", team });
});

//Delete a team member
//DELETE "/api/delete-member/:id"
//@desc : Delete team member with id

app.delete("/api/delete-member/:id", (req, res) => {
  let id = +req.params.id;
  team = team.map((member) => member.id !== id);

  res.status(200).json({ msg: "Member has been deleted successfully", team });
});

//Listen & Run  server
app.listen(PORT, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log(`Server connected successfully on port ${PORT}`);
});
