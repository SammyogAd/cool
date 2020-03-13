const express = require("express");
app = express();
app.use(express.json());
const Joi = require("joi");

let courses = [
  {
    id: 1,
    name: "course1"
  },
  {
    id: 2,
    name: "course2"
  }
];
app.get("/", (req, res) => {
  res.send("Hola, amigo!");
});
app.get("/api/courses", (req, res) => {
  res.send();
});
app.get("/api/courses/:id", (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Id not found");
  res.send(course);
});
app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  let course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});
app.put("/api/course/:id", (req, res) => {
  let course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Id not found");
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`server started at port ${port}`);
});
