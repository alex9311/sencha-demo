Ext.define('stocks.view.HistoricalDataWindow', {
	extend: 'Ext.window.Window',
	title: 'Historical Data - Closing Value',
	height: 400,
	width: 750,
	layout:'border',
	tbar:[{	
		xtype:'combo',
		emptyText:'select',
		fieldLabel: 'Choose Stock Characteristic',
		queryMode: 'local',
		store: new Ext.data.ArrayStore({
			fields: ['value','display'],
			data: [['close','Closing Value'],['open','Opening Value'],['high','Highest Value'],['low','Lowest Value'],['volume','Volume'],['adj_close','Adjusted Close']],
		}),
		valueField: 'value',
		displayField: 'display',
	}],
	items:[{
		region:'center',
		xtype:'chart',
		hidden: false,
		style: "background:#fff",
		animate: true,
		store: 'HistoricalData',
		shadow: true,
		axes: [{
			type: "numeric",
			minimum: 0,
			position: "left",
			fields: ['close','open','high','low','volume','adj_close'],
			title: 'Value',
			minorTickSteps: 1,
			grid: {
				odd: {
					opacity: 1,
					fill: "#ddd",
					stroke: "#bbb",
					"stroke-width": 0.5
				}
			}
		}, {
			type: "time",
			position: "bottom",
			fields: ["date"],
			title: "Date",
			renderer:function(string){ 
				var date = new Date(string);
				return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear().toString().substr(2,2)
				return date.toDateString();
			}
		}],
		series: [{
			type: "line",
			axis: "left",
			smooth: true,
			xField: "date",
			yField: "close",
			title: "Closing Value",
			marker: { type: 'circle', size: 4, radius: 4, 'stroke-width': 0 }
		}]
	}]
});
