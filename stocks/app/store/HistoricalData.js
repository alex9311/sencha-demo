Ext.define('stocks.store.HistoricalData', {
	extend: 'Ext.data.Store',
	model: 'stocks.model.HistoricalData',
        autoSync: true,
        purgePageCount: 0,
        proxy: {
           type: 'rest',
           url: 'get_historical_stock_data.php',
           reader: {
                   type: 'json',
                   rootProperty: 'historical_stock_data',
                   successProperty: 'success'
           }
        }

});
