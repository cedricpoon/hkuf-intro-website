<?php
  /* Load model for view */
  $json = file_get_contents('store/sidebarItems.json');
  $items = json_decode($json);

  /* Prepare view */
  require 'view/main.php';
?>
