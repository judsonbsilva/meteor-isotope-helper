Template.gridIsotope.onCreated(function(){
	
	if( !_.isString(this.data.id))
		throw new Meteor.Error("meteor-isotope-id","The grid needs id.");
	
	this.data.container = '#' + this.data.id;
	
	var id = this.data.id,
			options = _.extend({
				itemSelector: '.isotope-item',
		    layoutMode: 'fitRows'
			}, this.data);

	if(! _.has(MeteorIsotope.containers, id)){
		MeteorIsotope.containers[id] = new MeteorIsotope.grid( options );
	} else console.log("MeteorIsotope grid id already exists!");

});

Template.gridIsotope.onRendered(function(){
	var self = this;
	
	self.autorun(function(){
		self.$(self.data.container).isotope( MeteorIsotope.get(self.data.id) );
	});
});