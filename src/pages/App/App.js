import React from 'react';

import Header from '../../components/header/header.component';
import CardList from '../../components/cardlist/cardlist.component';
import Modal from '../../components/modal/modal.component';
import Footer from '../../components/footer/footer.component';

import {getPokemons} from '../../assets/SupportFunctions';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      name:'',
      id:'',
      height:'',
      weight:'',
      abilities:[],
      types:[],
      items:[],
      showModal:false
    }
  }

  componentDidMount() {
    // ** Fetches all Pokemons from POKEAPI once the temporary page starts loading
      getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000')
      .then(response => { 
        this.setState({pokemons: response.results})
      })
  }

  // ** Opens the modal whenever the user clicks on a Pokemon card on Pokedex
  openModal = (event) => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.id}/`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map(item => item.ability.name + ' '),
          types: data.types.map(item => item.type.name + ' '),
          items: data.held_items.map(item => item.item.name + ' '),
          showModal: true
        })
      });
    } catch(err) {
      console.log('ooooops', err);
    }
  }

// ** Closes the modal everytime the user clicks on 'X' on the modal
  onCloseClick = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    if (!this.state.pokemons.length) {
      return (
        // App shows page loader while it requests data from the API
          <div className="temp-page">
            <div className ="page-loader animate-flicker">Please wait...</div>
          </div>      
      )} else {
      return (
        // Main App
        <div className="App">
          <Header />
          <div id="pokedex" className="pt5">
            <CardList 
              pokemons={this.state.pokemons} 
              openModal={this.openModal}
            />
            <Modal 
              name={this.state.name}
              id={this.state.id}
              height={this.state.height}
              weight={this.state.weight}
              abilities={this.state.abilities}
              types={this.state.types}
              items={this.state.items}
              showModal={this.state.showModal}
              onCloseClick={this.onCloseClick}
            />
            <Footer />
          </div>
        </div>
      )
    }
  }
}
  
export default App;