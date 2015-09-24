Ext.define('stocks.Application', {
	extend: 'Ext.app.Application',
    
	name: 'stocks',

	controllers: 	[ 'MainController' ],
	stores: 	[ 'Stocks' ],
	models: 	[ 'Stock' ],
	views: 		[ 'Main', 'StockGrid' ],
    
	launch: function () { }
});
