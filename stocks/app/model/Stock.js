Ext.define('stocks.model.Stock', {
	extend: 'Ext.data.Model',
  	fields:[
		{'name': 'name', type: 'string'},
		{'name': 'symbol', type: 'string'},
		{'name': 'price', type: 'float'},
		{'name': 'change', type: 'string'},
		{'name': 'volume', type: 'int'},
		{'name': 'avg_daily_volume', type: 'int'},
		{'name': 'stock_exchange', type: 'string'},
		{'name': 'market_cap', type: 'float'},
		{'name': 'book_value', type: 'float'},
		{'name': 'ebitda', type: 'string'},
		{'name': 'fiftytwo_week_high', type: 'float'},
		{'name': 'fiftytwo_week_low', type: 'float'}
 	]

});
