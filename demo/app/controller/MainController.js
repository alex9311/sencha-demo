Ext.define('demo.controller.MainController', {
	extend: 'Ext.app.Controller',
	init: function(){
		this.control({
			'button[action=reload_stores]'	:	{ click:this.reload_stores },
		});
	},

	reload_stores:function(){
		var stock_store = Ext.data.StoreManager.lookup('Stocks');
		stock_store.reload();
        }

});
