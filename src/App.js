import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "18be73bc05a5ff901fbcf342df16ad9e";


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://food2fork.com/api/search?key=${API_KEY }&q=${recipeName}&count=10`);
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="container App-title">Recipe Finder</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes  recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;