MeteorIsotope = {
	containers:{},
	exists: function(id){
		return _.has(this.containers, id);
	},
	get: function( id ){
		if( !this.exists(id) )
			console.log('MeteorIsotope id '+ id +' not exists!');
		else return MeteorIsotope.containers[id].get();
	},
	set: function( id, options ){
		if( !this.exists(id) )
			console.log('MeteorIsotope id '+ id +' not exists!');
		else MeteorIsotope.containers[id].set(options);
	}
};

MeteorIsotope.grid = function( options ){

	if( this.constructor != MeteorIsotope.grid )
		return new MeteorIsotope.grid(defaults);

	this.data = new ReactiveVar( _.extend({
		itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
	}, options));
};

MeteorIsotope.grid.prototype.get = function(){
	return this.data.get();
};

MeteorIsotope.grid.prototype.set = function( data ){
	var temp = this.data.get();
	this.data.set(_.extend(temp, data));
};