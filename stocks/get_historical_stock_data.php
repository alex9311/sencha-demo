<?php
require_once('php-stock-market-api/class.stockMarketAPI.php');


$start = '01-01-2015';
$end = date("m-d-Y");

$StockMarketAPI = new StockMarketAPI;
$StockMarketAPI->symbol = $_GET['stock_symbol'];
$StockMarketAPI->history = array(
  'start' 	 => $start,
  'end' 	 => $end,
  'interval' => 'd' // Daily
);

$trimmed_data = current($StockMarketAPI->getData());
array_shift($trimmed_data);
$historical_stock_data = json_encode($trimmed_data);


header("Cache-Control: no-cache, must-revalidate");
header("Expires: Fri, 01 Jul 2013 00:00:00 GMT"); // Date in the past
header("Content-type: application/JSON; charset=utf-8");

$anydata = empty($historical_stock_data) ? 'false' : 'true';
?>

{"status": <?php echo $anydata; ?>, "historical_stock_data": <?php echo $historical_stock_data; ?>}


