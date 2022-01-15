import React from "react";
import ReactDom from "react-dom";

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 },
];

function OurApp() {
  return (
    <>
      <OurHeader />
      <OurContent />
      <ul>
        {pets.map((pet) => (
          <Pet
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
      <OurFooter />
    </>
  );
}
//Usage Of Components
function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old{" "}
    </li>
  );
}
function OurHeader() {
  return <h1 className="special">Our Amazing React app</h1>;
}
function OurContent() {
  return <p>The Current time is {new Date().toLocaleString()}</p>;
}
function OurFooter() {
  return <small>This is Copyright Footer</small>;
}
setInterval(function () {
  ReactDom.render(<OurApp />, document.querySelector("#app"));
}, 1000);
//Load Just the content not the whole page if changes happen
// if (module.hot) {
//   module.hot.accept();
// }
