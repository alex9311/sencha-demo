Ext.define('stocks.store.Stocks', {
	extend: 'Ext.data.Store',
	model: 'stocks.model.Stock',
        autoLoad: true,
        autoSync: true,
        purgePageCount: 0,
        proxy: {
           type: 'rest',
           url: 'get_stock_data.php',
           reader: {
                   type: 'json',
                   rootProperty: 'all_stock_data',
                   successProperty: 'success'
           }
        }

});
