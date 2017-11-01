angular.module('pokedex')
.filter('idTypeFilter', function(){
 
  return function(pokemons, stringtype) {
    var results = [];
    
    if(stringtype == "all"){
    		return pokemons;
    }
    
    pokemons.forEach(function(poke) {
     poke.types.forEach(function(type){
    		if (type.name === stringtype) {
    			results.push(poke);
    		}
      });
    });
    return results;
  }
})