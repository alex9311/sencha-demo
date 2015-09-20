<?php
require_once('php-stock-market-api/class.stockMarketAPI.php');
?>

<h1>Current Stock Information for AAPL</h1>

<?php
$stock_symbols = array("AAPL","XOM","MSFT","GOOGL","JNJ","WFC","WMT","GE","PG" ,"JPM","CVX","VZ","FB","KO","PFE","T","ORCL","BAC");

foreach($stock_symbols as $stock_symbol){
	$StockMarketAPI = new StockMarketAPI;
	$StockMarketAPI->symbol = $stock_symbol;
	$StockMarketAPI->stat = "name, price";
	$stock_data = $StockMarketAPI->getData();
	print("<pre>".$stock_symbol."<br>");
	//print_r($stock_data[0]["name"][0]);
	print_r($stock_data[0]);
	print("</pre>");
}
?>
<pre><?php// print_r($StockMarketAPI->getData());?></pre>

