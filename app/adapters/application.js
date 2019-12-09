import DS from 'ember-data';
import ENV from 'ember-pokedex/config';

export default DS.JSONAPIAdapter.extend({
  host: 'https://pokeapi.co/api/v2/pokemon/'
});