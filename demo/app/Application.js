Ext.define('demo.Application', {
	extend: 'Ext.app.Application',
    
	name: 'demo',

	controllers: 	[ 'MainController' ],
	stores: 	[ 'Stocks' ],
	models: 	[ 'Stock' ],
	views: 		[ 'Main', 'StockGrid' ],
    
	launch: function () { }
});
