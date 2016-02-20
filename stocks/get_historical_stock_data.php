<?php
require_once('php-stock-market-api/class.stockMarketAPI.php');
date_default_timezone_set('America/Los_Angeles');

$stock_symbol = $_GET['stock_symbol'];

$start = date("m-d-Y",strtotime( '-4 week'));
$end = date("m-d-Y");

$StockMarketAPI = new StockMarketAPI;
$StockMarketAPI->symbol = $stock_symbol;
$StockMarketAPI->history = array(
  'start' 	 => $start,
  'end' 	 => $end,
  'interval' => 'd' // Daily
);

$hisorical_data = $StockMarketAPI->getData()[$stock_symbol];
array_shift($hisorical_data);//first element is header names, shift them off the array
$historical_stock_data = json_encode($hisorical_data);


header("Cache-Control: no-cache, must-revalidate");
header("Expires: Fri, 01 Jul 2013 00:00:00 GMT"); // Date in the past
header("Content-type: application/JSON; charset=utf-8");

$anydata = empty($historical_stock_data) ? 'false' : 'true';
?>

{"status": <?php echo $anydata; ?>, "historical_stock_data": <?php echo $historical_stock_data; ?>}


