<?php foreach ($store as $item) { ?>
  <a class="item enabled">
    <div class="ui label">
      <i class="bookmark icon"></i><span class="postNo">-</span>
    </div>
    <?php echo $item->label ?>
    <i class="<?php echo $item->icon ?> icon"></i>
    <span class="title"><?php echo $item->title ?></span>
  </a>
<?php } ?>
