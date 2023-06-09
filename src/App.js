import React from "react";
import { Component } from "react";
import { SearchBox } from "./Components/SearchBox";
import { CardList } from "./Components/CardList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{
  constructor(){
    super(); 

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h4><a href="https://www.linkedin.com/in/surojit-manna" target="_blank" noreferrer>Author</a></h4>
        <h1>Pokemon Database</h1>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />

        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default App;
