angular.module('pokedex')
  .component('pokeList', {
    templateUrl: 'app/appModule/pokeList.component.html',
 
  
    		controller: function(pokemonService){
	  
    		var vm = this;
    		
		vm.pokemon = [];
		
		vm.types = [
            'all',
            'normal',
            'poison',
            'water',
            'fighting',
            'fire',
            'bug',
            'flying',
            'electric',
            'ground',
            'rock',
            'psychic',
            'ghost',
            'dragon'
          ];
		
		vm.filterSort = 'all';
		
		pokemonService.index()
		.then(function(res){
			
			vm.pokemon = res.data
			
		});
		 
		vm.createPokemon = function(pokemon){
			
			pokemonService.create(pokemon)
			.then(function(response){
				
			});
		}
			
		vm.filterByType = function(type){
			console.log(type);
			vm.filterSort = type;
		}
  
  	},
  	 controllerAs : 'vm'
  });