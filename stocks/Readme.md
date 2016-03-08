##Stocks
###Source Code Overview
####stocks/
This directory is primarily a container for the top-level pieces of the application.

The following files are all needed to build and load the application.

 - `"app.json"` - The application descriptor which controls how the application is
   built and loaded.
 - `"app.js"` - The file that launches the application. This is primarily used to
   launch an instance of the `MyApp.Application` class.
 - `"index.html"` - The default web page for this application. This can be customized
   in `"app.json"`.
 - `"build.xml"` - The entry point for Sencha Cmd to access the generated build
   script. This file is a place where you can hook into these processes and tune
   them. See the comments in that file for more information.
 - `".sencha"` - This dir contains the generated build scripts
   and configuration files for the application. This folder is required in order to
   build the application but its content should not need to be edited in most cases.
   The content of this folder is updated by "sencha app upgrade".
   
####stocks/php-stock-market-api
The tiny php api I used to query the stocks data from Yahoo finance. Made a [tiny fix](https://github.com/bmarshall511/php-stock-market-api/pull/3) to the api to keep it up to date with yahoo. 

####stocks/app
This directory contains the JavaScript files for the application. The code is organized in MVC format so there isn't much to explain here. I'll go over the more interesting parts of the application code.

#####Loading the historical data on rowclick
The historical stock data isn't fetched with the initial page load. When a user clicks a row this neat controller function is called which loads the HistoricalData store with the correct params and creates the new window for the graph. The HistoricalData store is linked to [get_historical_stock_data.php](get_historical_stock_data.php) which uses the given param to query Yahoo finance. 

```javascript
	historical_stocks:function(grid,td, cellIndex, record, tr, rowIndex, e, eOpts){
		Ext.data.StoreManager.lookup('HistoricalData').load({params:{stock_symbol:record.data.symbol}});
		var new_window = Ext.create('stocks.view.HistoricalDataWindow').show();
		new_window.setTitle(record.data.symbol+" - Closing Value");
	}
```

#####Charting a new field
The other interesting controller function is when the field displayed on the chart is switched. the update_chart_series makes use of some cool ext functions to set the new series according to what is selected in the dropdown.

```javascript
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
```

