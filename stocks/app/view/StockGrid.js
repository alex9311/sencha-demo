Ext.define('stocks.view.StockGrid', {
	extend: 'Ext.grid.Panel',
    	alias: 'widget.stockgrid',
	requires: ['stocks.store.Stocks'],
	emptyText: 'Couldnt load stock data',
   	store: 'Stocks',
	frame: 'true',
	id: 'stockgrid',

	tbar: [{
		xtype:'button',
		text:'Reload Data',
		action:'reload_stores'
	}],

	columns: [
		{ text: 'Symbol',	dataIndex: 'symbol', 	flex: 1 },
		{ text: 'Name',  	dataIndex: 'name', 	flex: 1 },
		{ text: 'Price',  	dataIndex: 'price', 	flex: 1 },
		{ text: 'Change',  	dataIndex: 'change', 	flex: 1 },
		{ text: 'Market Cap',  	dataIndex: 'market_cap',flex: 1 },
		{ text: '52 Week High', dataIndex: 'fiftytwo_week_high', flex: 1 },
		{ text: '52 Week Low', 	dataIndex: 'fiftytwo_week_low', flex: 1 }
        	],
});
