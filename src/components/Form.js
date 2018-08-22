import React from 'react';

const Form = (props) => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
    <div className="container form__header">
      <input className="form__input" type="text" name="recipeName" />
      <button className="form__button">Search</button>
    </div>
  </form>
);

export default Form;