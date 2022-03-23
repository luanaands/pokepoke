import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {
    user: Model,
    pokemon: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/users', (schema, request) => {
      return [
        {
          id: 1,
          name: 'Luana',
        },
        {
          id: 2,
          name: 'Luiza',
        }
      ]
    })

    this.get('/pokemons/:userId', (schema, request) => {
      const list = [
        {
          id: 1,
          pokemonId: 1,
          name: 'Pikachu',
          userId: 1,
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'
        },
        {
          id: 2,
          pokemonId: 2,
          name: 'Charmander',
          userId: 1,
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'
        },
        {
          id: 3,
          pokemonId: 3,
          name: 'Bulbasaur',
          userId: 1,
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
        },
        {
          id: 4,
          pokemonId: 4,
          name: 'Squirtle',
          userId: 1,
          url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'
        },
        { id: 5, pokemonId: 5, name: 'Pidgey', userId: 1, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png' },
        { id: 6, pokemonId: 5, name: 'Rattata', userId: 1, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png' },
        { id: 7, pokemonId: 1, name: 'Pikachu', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png' },
        { id: 8, pokemonId: 8, name: 'Sandshrew', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png' },
        { id: 9, pokemonId: 9, name: 'Nidoran', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png' },
        { id: 10, pokemonId: 10, name: 'Nidorina', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png' },
        { id: 11, pokemonId: 11, name: 'Nidoqueen', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png' },
        { id: 12, pokemonId: 12, name: 'Nidoran', userId: 2, url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png' },

      ]
      return list.filter(pokemon => pokemon.userId === parseInt(request.params.userId))
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

