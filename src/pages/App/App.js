import React, {Component} from 'react';

import Header from '../../components/header/header.component';
import CardList from '../../components/cardlist/cardlist.component';

import {getPokemons} from '../../assets/SupportFunctions';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    // ** Fetches all Pokemons from POKEAPI
      getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000')
      .then(response => this.setState({pokemons: response.results}));
    }

  render() {
    return (
      <div className="App">
        <Header />
        <CardList pokemons = {this.state.pokemons} />
      </div>
    )
  }
}
  
export default App;