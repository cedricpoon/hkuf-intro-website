<?php
/* Load model for view */
$json = file_get_contents('store/sidebarItems.json');
$items = json_decode($json);

foreach ($items as $item) {
  if ($_SERVER['QUERY_STRING'] == $item->title) {

    $route = $item->title;
    $_SERVER['QUERY_STRING'] = '.';
    break;
  } else if ($_SERVER['QUERY_STRING'] == '*'.($item->title) && file_exists('view/article/'.$item->title.'.php')) {

    require 'view/article/'.$item->title.'.php';
    $_SERVER['QUERY_STRING'] = '*';
    break;
  }
}

switch ($_SERVER['QUERY_STRING']) {

    case '':
      $route = 'Introduction';
    case '.':
      require 'view/entry.php';
      break;

    case '*main':
      require 'controller/main.php';
      break;

    case '*':
      break;

    default:
      header('HTTP/1.0 404 Not Found');
      echo '<h1>404</h1>';
      break;
}
?>
