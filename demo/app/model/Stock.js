Ext.define('demo.model.Stock', {
	extend: 'Ext.data.Model',
  	fields:[
		{'name': 'price', type: 'float'},
		{'name': 'change', type: 'string'},
		{'name': 'symbol', type: 'string'},
		{'name': 'name', type: 'string'},
		{'name': 'market_cap', type: 'float'}
 	]

});
