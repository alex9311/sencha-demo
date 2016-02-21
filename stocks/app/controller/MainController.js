Ext.define('stocks.controller.MainController', {
	extend: 'Ext.app.Controller',
	init: function(){
		this.control({
			'button[action=reload_stores]'	:	{ click:this.reload_stores },
			'#stockgrid'			:	{celldblclick:this.historical_stocks},
			'combo'				:	{select:this.update_chart_series}
		});
	},

	update_chart_series:function(combo, records, eOpts){
		var new_field = records.data.value;
		var chart_window = combo.up("window");
		var chart = chart_window.down('chart');
		var series = chart.getSeries()[0];
		series.setYField(new_field);
		chart.getStore().reload();	
		old_title = chart_window.title;
		chart_window.setTitle(old_title.substr(0, old_title.indexOf('-'))+" - "+records.data.display);
	},

	reload_stores:function(){
		var stock_store = Ext.data.StoreManager.lookup('Stocks');
		stock_store.reload();
        },

	historical_stocks:function(grid,td, cellIndex, record, tr, rowIndex, e, eOpts){
		Ext.data.StoreManager.lookup('HistoricalData').load({params:{stock_symbol:record.data.symbol}});
		var new_window = Ext.create('stocks.view.HistoricalDataWindow').show();
		new_window.setTitle(record.data.symbol+" - Closing Value");
	}
});
