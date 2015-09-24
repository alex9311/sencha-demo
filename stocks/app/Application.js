Ext.define('stocks.Application', {
	extend: 'Ext.app.Application',
    
	name: 'stocks',

	controllers: 	[ 'MainController' ],
	stores: 	[ 'Stocks', 'HistoricalData' ],
	models: 	[ 'Stock', 'HistoricalData' ],
	views: 		[ 'Main', 'StockGrid', 'HistoricalDataWindow' ],
    
	launch: function () { }
});
