const person = () => {
  var name = "Name";
  return {
    getName: () => name,
    setName: (newName) => {
      name = newName;
    }
  }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Fernando");
console.log(newPerson.getName());
