import React from 'react'

const RecipeCard = props => {
  return (
    <div>
      <h2>{props.recipe.name}</h2>
      <p>{props.recipe.ingredients}</p>
    </div>
  )
}

export default RecipeCard
