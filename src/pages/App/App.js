import React, {Component} from 'react';

import Header from '../../components/header/header.component';
import CardList from '../../components/cardlist/cardlist.component';
import Modal from '../../components/modal/modal.component';
import Footer from '../../components/footer/footer.component';

import {getPokemons} from '../../assets/SupportFunctions';

import './App.css';

class App extends Component {
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
    // ** Fetches all Pokemons from POKEAPI
      getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000')
      .then(response => { 
        this.setState({pokemons: response.results})
      })
  }

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

  onCloseClick = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    if (!this.state.pokemons.length) {
      return (
          <div id="temp-page">
            <div className ="page-loader animate-flicker">Please wait...</div>
          </div>      
      )} 
        else
      {
      return (
        <div className="App">
          <Header />
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
      )
    }
}
  
export default App;