import React from 'react';
// import Logo from '../static/images/cspace.svg';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import "../styles/index.css";

const API_URL = 'http://reactrecipes.herokuapp.com';



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState( {recipes})
      });
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(currentRecipe => {
        this.setState({ currentRecipe });
      })
  }

  render() {
    const { recipes, currentRecipe } = this.state;

    return (
    <div>
      <main className="px8 flex">
        <RecipeList 
          recipes={recipes} 
          style={{flex: 3}}
          onClick={this.onRecipeClick} 
        />
        <RecipeDetail 
        style={{flex: 5}}
        className="ma10"
        recipe={currentRecipe}
        />
      </main>
    </div>
    )
  }
};

export default Home;
