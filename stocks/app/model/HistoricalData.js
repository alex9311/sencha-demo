Ext.define('stocks.model.HistoricalData', {
	extend: 'Ext.data.Model',
  	fields:[
		{'name': 'date', type: 'date'},
		{'name': 'open', type: 'float'},
		{'name': 'high', type: 'float'},
		{'name': 'low', type: 'float'},
		{'name': 'close', type: 'float'},
		{'name': 'volume', type: 'int'},
		{'name': 'adj_close', type: 'float'}
 	]

});
