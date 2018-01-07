import React from "react";
import { Link } from "react-router-dom";


const Pet = ({ name, species,image, handleClick }) => (
  <div>
    <div>
      <h1>{name}</h1>
      <h2> Species: {species}</h2>
      <img src={image} alt="" /><br/>
      <button onClick={handleClick}>Like {name}</button><br/>
      <Link to="/pets">Back</Link>
    </div>
  </div>
);

export default Pet;
