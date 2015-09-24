Ext.define('stocks.controller.MainController', {
	extend: 'Ext.app.Controller',
	init: function(){
		this.control({
			'button[action=reload_stores]'	:	{ click:this.reload_stores },
			'#stockgrid'			:	{celldblclick:this.historical_stocks}
		});
	},

	reload_stores:function(){
		var stock_store = Ext.data.StoreManager.lookup('Stocks');
		stock_store.reload();
        },

	historical_stocks:function(grid,td, cellIndex, record, tr, rowIndex, e, eOpts){
		console.log("clicked stocks: "+record.data.symbol);
		Ext.data.StoreManager.lookup('HistoricalData').load({params:{stock_symbol:record.data.symbol}});
		Ext.create('stocks.view.HistoricalDataWindow').show();

	}
});
