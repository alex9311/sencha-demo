Ext.define('demo.store.Stocks', {
	extend: 'Ext.data.Store',
	model: 'demo.model.Stock',
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
