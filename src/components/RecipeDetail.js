import React from 'react';
import classNames from 'classnames';

const RecipeDetail = (props) => {
  console.log(props);
  if (!props.recipe) {
    return (
      <p 
        style={props.style}
        className={classNames("h3 p2 bg-white italic center", props.className)}
      >
        Please select recipe to see detail.
      </p>
    )
  } else {
    return (
      <div style={props.style} 
          className={classNames("p2 bg-white", props.className)}
      >
        <h2 className="h2">{props.recipe.name}</h2>
        <img  className="fit"
              src={props.recipe.image}/>
        <div>
          <span> { props.recipe.category } </span>
          <span> { props.recipe.calories } </span>
        </div>
        <h3> Ingridients </h3>
        <ul>
          {props.recipe.ingredients.map(ingridient => (
            <li key={ingridient}>
              {ingridient}
            </li>
          ))}
        </ul>
        <h3> Steps </h3>
        <ol>
          {props.recipe.steps.map(step => (
            <li key={step}>
              {step}
            </li>
          ))}
        </ol>
    </div>
  )};
};

export default RecipeDetail;
