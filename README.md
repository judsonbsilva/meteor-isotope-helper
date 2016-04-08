MeteorIsotope
========

Create your isotope grids with this reactive blaze helper

Isotope site [here](http://isotope.metafizzy.co/)

## Installation

Install using Meteor's package management system:

```bash
> meteor add judsonsilva:isotope
```

## Testing (if you clone the package)
```bash 
> meteor test-packages ./
```

# How to use

## Using the blaze helper

Just do it:
```handlebars
	<template name="myTemplate">
		<button id='change-sort'>Change</button>
		{{#gridIsotope id='blocks' itemSelector='.block' getSortData=blockGridData }}
			{{#each blocks}}
				<div class="block">
					<span class="number">{{number}}</span>
					<span class="name">{{name}}</span>
				</div>
			{{/each}}
		{{/gridIsotope}}
	</template>
```

```css
#blocks {	margin-top:20px }

.block {
	float: left;
	width: 100px;
	height: 100px;
	background: #eee;
	margin:10px;
	padding:10px;
}
```

```js
Template.myTemplate.helpers({
  blocks: function(){
		return [
			{ number: 5, name: 'Jhonathas', sex: 'm' },
			{ number: 6, name: 'Gabriel', sex: 'm'},
			{ number: 7, name: 'Desconhecido', sex: 'm'},
			{ number: 3, name: 'Nathália', sex: 'f'},
			{ number: 4, name: 'Thainá', sex: 'f'},
			{ number: 8, name: 'Karla', sex: 'f'},
			{ number: 9, name: 'Karleandro', sex: 'm'},
			{ number: 10, name: 'Vitor', sex: 'm'},
			{ number: 1, name: 'Ana Carolina', sex: 'f'},
			{ number: 2, name: 'Julia', sex: 'f'}
		];
	},
	blockGridData: function(){
		return {
			name:'.name',
			number: '.number parseInt'
		};
	}
});

var index = 0,
		sorts = ['name','number'];

Template.myTemplate.events({
	'click #change-sort': function(){
		console.log('HERE');
		MeteorIsotope.set('blocks', { sortBy: sorts[index] });
		index = index == 0 ? 1: 0;
	}
});

```