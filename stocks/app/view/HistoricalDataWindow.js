Ext.define('stocks.view.HistoricalDataWindow', {
	extend: 'Ext.window.Window',
	title: 'Historical Data',
	height: 400,
	width: 750,
	layout:'border',
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
			fields: ["close"],
			title: "Value",
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
			title: "Date"
		}],
		series: [{
			type: "line",
			highlight: {
				size: 7,
				radius: 7
			},
			axis: "left",
			smooth: true,
			xField: "date",
			yField: "close",
			title: "Closing Value",
		}]
	}]
});
