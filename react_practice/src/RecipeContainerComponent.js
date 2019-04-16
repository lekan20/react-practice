import React from 'react'
import RecipeCard from './RecipeCard'

const recipes = [
  {
    name: "Pizza",
    ingredients: "dough, cheese, sauce"
  },
  {
    name: "Ham and Cheese",
    ingredients: "hame, cheese, bread"
  },
  {
    name: "Salad",
    ingredients: "lettuce, cheese, dressing"
  },
  {
    name: "Artichoke Salad",
    ingredients: "Artichokes and stuff"
  },
  {
    name: "Chile",
    ingredients: "Meat and beans and spices"
  }
]

class RecipeContainerComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      recipes: [],
      sorted: false,
      input: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    console.log("before setState, state was ..", this.state)
    this.setState({
      recipes: recipes
    })
  }

  handleClick(event){
    event.preventDefault(event);
    const newSortedState = this.state.sorted ? false : true
    this.setState({
      sorted: newSortedState
    })
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({input: event.target.value}, ()=> console.log(this.state) );
  }

  sortedRecipes = () => this.state.recipes.slice().sort((a,b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {return -1}
    if (a.name.toUpperCase() > b.name.toUpperCase()) {return 1}
    return 0
  })

  render() {
    console.log("hello")
    const recipes = this.state.sorted ? this.sortedRecipes() : this.state.recipes
    const recipeCards = recipes
      .filter(recipe => recipe.ingredients.toUpperCase().includes(this.state.input.toUpperCase()))
      .map(recipe => <RecipeCard key={recipe.name} recipe={ recipe }/>)


    return (
      <div>
        <h1>Recipes</h1>
        <button onClick={this.handleClick}>
          { this.state.sorted ? "Sorted" : "Not Sorted" }
        </button>
        <form>
          Search Recipe by ingredients:
          <input type="text" value={this.state.input} onChange={this.handleChange} />
        </form>
        { recipeCards }
    </div>
    )
  }
}

export default RecipeContainerComponent
