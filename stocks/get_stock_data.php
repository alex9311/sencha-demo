<?php
require_once('php-stock-market-api/class.stockMarketAPI.php');

$stock_symbols = array("AAPL","XOM","MSFT","GOOGL","JNJ","WFC","WMT","GE","PG" ,"JPM","CVX","VZ","FB","KO","PFE","T","ORCL","BAC");
$all_stock_data = array();
$StockMarketAPI = new StockMarketAPI;
$StockMarketAPI->symbol = $stock_symbols; 
$stock_data = ($StockMarketAPI->getData());
$all_stock_data_json = json_encode(array_values($stock_data));

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Fri, 01 Jul 2013 00:00:00 GMT"); // Date in the past
header("Content-type: application/JSON; charset=utf-8");

$anydata = empty($all_stock_data_json) ? 'false' : 'true';
?>

{"status": <?php echo $anydata; ?>, "all_stock_data": <?php echo $all_stock_data_json; ?>}


