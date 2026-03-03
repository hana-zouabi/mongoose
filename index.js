const connectDataBase = require("./config/connectDB");
const Person = require("./Models/Person");

connectDataBase();
// create a new person
const newPerson = new Person({
  name: "John Doe",
  age: 30,
  favoriteFood: ["Pasta", "pizza", "seafood"],
});
// save new person to database
newPerson
  .save()
  .then((savedPerson) => console.log("saved Person", savedPerson))
  .catch((error) => console.log("error!!!"));

// Array of people
Person.create([
  { name: "Mary", age: 22, favoriteFood: ["burrito", "salad"] },
  { name: "Steve", age: 30, favoriteFood: ["steak"] },
  { name: "Anna", age: 28, favoriteFood: ["burrito", "pizza"] },
])
  .then((savedPeople) =>
    console.log("List of people is saved good job:", savedPeople),
  )
  .catch((error) => console.log("error!!!"));

//find all person
Person.find({})
  .then((people) => console.log(people))
  .catch((error) => console.log("error!!!"));

// find one person in our case Mary
Person.findOne({ name: "Mary" })
  .then((people) => console.log(people))
  .catch((error) => console.log("error!!!"));

//use find by id
Person.findById("699b0c56f6882b4830dace81")
  .then((people) => console.log(people))
  .catch((error) => console.log("error!!!"));

// classic Update find -> edit -> save
Person.findById(
  "699b0c56f6882b4830dace81",
  { favoriteFood: "Hamburguer" },
  { new: true },
)
  .then((updateUser) => console.log(updateUser))
  .catch((err) => console.log(err));

// find one and update
Person.findOneAndUpdate({ userName: "Anna" }, { age: 20 }, { new: true })
  .then((updateUser) => console.log(updateUser))
  .catch((err) => console.log(err));

// Delete  document
Person.findByIdAndDelete("699b0a1dae1c9266d8d7e510")
  .then((deletedUser) => console.log(deletedUser))
  .catch((err) => console.log(err));

// Delete one document
Person.findOneAndDelete({ userName: "Anna" })
  .then((deletedUser) => console.log(deletedUser))
  .catch((err) => console.log(err));

// Delete many
Person.deleteMany({ age: 22 })
  .then((deleted) => console.log(deleted))
  .catch((err) => console.log(err));

// Chain Search Query Helpers
Person.find({ favoriteFoods: "burrito" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .then((peopleFiltered) => console.log(peopleFiltered.length))
  .catch((err) => console.log(err));
